import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalHeading,
} from "@twilio-paste/core";
import React from "react";
import { useUID } from "@twilio-paste/core/uid-library";
import LoginForm from "./loginForm";
import MFAForm from "./mfaForm";
import { useRouter } from "next/navigation";

export default function LoginModal() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [mfaModal, setMFAModal] = React.useState({
    visible: false,
    channel: "sms",
  });
  const [msg, setMsg] = React.useState(null);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const modalHeadingID = useUID();
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    const JSONdata = JSON.stringify(data);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const res = await fetch("/api/login", options);
    const json = await res.json();

    //STEP 1: SMS 2FA
    if (json.success) {
      setMFAModal({
        visible: true,
        channel: json.channel,
        tel: json.tel,
        email: json.email,
      });
    } else {
      setMsg(json.msg);
    }
  };

  const handleMFA = async (event) => {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      tel: event.target.tel.value,
      code: event.target.code.value,
    };
    console.log(data);
    const JSONdata = JSON.stringify(data);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const res = await fetch("/api/validateMfa", options);
    const json = await res.json();
    if (json.success) {
      router.push("/account");
    } else {
      setMsg(json.msg);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleOpen}>
        Login
      </Button>

      <Modal
        ariaLabelledby={modalHeadingID}
        isOpen={isOpen}
        onDismiss={handleClose}
        size="default"
      >
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Login
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          {!mfaModal.visible ? (
            <LoginForm onSubmitHandler={handleSubmit} msg={msg} />
          ) : (
            <MFAForm
              onSubmitHandler={handleMFA}
              channel={mfaModal.channel}
              tel={mfaModal.tel}
              email={mfaModal.email}
              msg={msg}
            />
          )}
        </ModalBody>
      </Modal>
    </>
  );
}
