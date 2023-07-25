'use client'
import { Button, Form, Input, Label, Modal, ModalBody, ModalHeader, ModalHeading, ModalFooter, ModalFooterActions, Option, Paragraph, Select, FormControl } from '@twilio-paste/core'
import React from 'react'
import { useUID } from '@twilio-paste/core/uid-library'
import LoginForm from './loginForm'
import MFAForm from './mfaForm'

export default function LoginModal() {

    const [isOpen, setIsOpen] = React.useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const modalHeadingID = useUID();
    return (
        <>
            <span className="icon">
                <Button variant="primary_icon" size="icon_small" className="icon" onClick={handleOpen}>
                    <img src='/user.svg' width={20} height={20} style={{ verticalAlign: 'text-bottom' }} alt="Profile" />
                </Button>
            </span>

            <Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleClose} size="default">
                <ModalHeader>
                    <ModalHeading as="h3" id={modalHeadingID}>
                        Login
                    </ModalHeading>
                </ModalHeader>
                <ModalBody>
                    <LoginForm />
                </ModalBody>
            </Modal>
        </>

    )
}
