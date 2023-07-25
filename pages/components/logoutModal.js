"use client";
import {
  Button,
  Form,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  ModalHeading,
  ModalFooter,
  ModalFooterActions,
  Option,
  Paragraph,
  Select,
  FormControl,
} from "@twilio-paste/core";
import React from "react";
import { useUID } from "@twilio-paste/core/uid-library";
// import { LogOutIcon } from "@twilio-paste/icons/esm/LogOutIcon";
export default function LogoutModal() {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const modalHeadingID = useUID();
  return (
    <>
      <div>
        <Button variant="destructive" size="icon" onClick={handleOpen}>
          Logout {/* Logout <LogOutIcon decorative={false} title="Logout" /> */}
        </Button>

        <Modal
          ariaLabelledby={modalHeadingID}
          isOpen={isOpen}
          onDismiss={handleClose}
          size="default"
        >
          <ModalHeader>
            <ModalHeading as="h3" id={modalHeadingID}>
              Logout
            </ModalHeading>
          </ModalHeader>
          <ModalBody>Are you sure you want to Logout?</ModalBody>
          <ModalFooter>
            <ModalFooterActions>
              <Button as="a" href="/api/logout" variant="primary">
                Logout
              </Button>
            </ModalFooterActions>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}
