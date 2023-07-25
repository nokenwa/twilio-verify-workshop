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
import { useRouter } from "next/navigation";

export default function LoginModal() {
  const [isOpen, setIsOpen] = React.useState(false);
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
        {/* <LogInIcon decorative={false} title="Description of icon" /> */}
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
          <LoginForm onSubmitHandler={handleSubmit} msg={msg} />
        </ModalBody>
      </Modal>
    </>
  );
}
