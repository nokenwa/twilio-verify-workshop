import React from "react";
import {
  Modal,
  ModalHeader,
  ModalHeading,
  ModalBody,
  ModalFooter,
  ModalFooterActions,
} from "@twilio-paste/core/modal";
import { Button } from "@twilio-paste/core/button";
import { Checkbox } from "@twilio-paste/core/checkbox";

export default function CookieDialog({ open, onClose }) {
  const cookieOptions = JSON.parse(
    localStorage.getItem("cookieOptions") ||
      '{"performance":false,"social":false}'
  );
  const [detailsOpen, setDetailsOpen] = React.useState(
    localStorage.getItem("cookieConsent") === "custom"
  );
  const [performance, setPerformance] = React.useState(
    cookieOptions.performance
  );
  const [social, setSocial] = React.useState(cookieOptions.social);
  const forceOpen =
    open === undefined && !localStorage.getItem("cookieConsent");

  const accept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem(
      "cookieOptions",
      JSON.stringify({ performance: true, social: true })
    );
    onClose();
  };

  const openDetails = () => {
    setDetailsOpen(true);
  };

  const closeDetails = () => {
    localStorage.setItem("cookieConsent", "custom");
    localStorage.setItem(
      "cookieOptions",
      JSON.stringify({ performance, social })
    );
    onClose();
  };

  const togglePerformance = () => {
    setPerformance(!performance);
    localStorage.setItem(
      "cookieOptions",
      JSON.stringify({ performance: !performance, social })
    );
  };

  const toggleSocial = () => {
    setSocial(!social);
    localStorage.setItem(
      "cookieOptions",
      JSON.stringify({ performance, social: !social })
    );
  };

  return (
    <>
      <Modal
        size="default"
        ariaLabelledby="cookieDialog"
        isOpen={(open || forceOpen) && !detailsOpen}
        onDismiss={onClose}
      >
        <ModalHeader>
          <ModalHeading>Cookie Preferences</ModalHeading>
        </ModalHeader>
        <ModalBody>
          <p>
            Twilio SIGNAL asks you to accept cookies for performance, social
            media and advertising purposes. Social media and advertising cookies
            of third parties are used to offer you social media functionalities
            and personalised ads.
          </p>
          <p>
            To get more information or amend your preferences, click the ‘More
            Information’ button or visit 'Cookie Settings' at the bottom of the
            website. To get more information about these cookies and the
            processing of your personal data, check our Privacy & Cookie Policy.
          </p>
          <p>
            Do you accept these cookies and the processing of personal data
            involved?
          </p>
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary" onClick={openDetails}>
              More Information
            </Button>
            <Button variant="primary" onClick={accept}>
              Yes, I Accept
            </Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
      <Modal
        ariaLabelledby="cookieDetails"
        isOpen={(open || forceOpen) && detailsOpen}
        size="wide"
        onDismiss={closeDetails}
      >
        <ModalHeader>
          <ModalHeading>Your Cookie Settings</ModalHeading>
        </ModalHeader>
        <ModalBody>
          <p>
            <Checkbox
              checked={true}
              disabled={true}
              helpText={
                "These cookies are required for basic site functionality and are therefore always enabled. These include cookies that allow you to be remembered as you explore the site within a single session or, if you request, from session to session. They help to make the bag and checkout process possible as well as assisting in security issues and conforming to regulations."
              }
            >
              Functional
            </Checkbox>
          </p>
          <p>
            <Checkbox
              id="performance"
              checked={performance}
              onChange={togglePerformance}
              helpText={
                "These cookies allow us to improve the site’s functionality by tracking usage on the website. In some cases these cookies can improve the speed with which we can process your request as they allow us to remember site preferences that you’ve selected. De-selecting these cookies may result in poorly tailored recommendations and slow site performance."
              }
            >
              Performance
            </Checkbox>
          </p>
          <p>
            <Checkbox
              id="social"
              checked={social}
              onChange={toggleSocial}
              helpText={
                "Social media cookies offer the possibility for you to connect to your social networks and share content from our website through social media. Advertising cookies (from third parties) collect information to help better tailor advertising to your interests, both within and beyond Twilio websites. In some cases, these cookies involve the processing of your personal data. For more information about this processing of personal data, check our Privacy & Cookie Policy. De-selecting these cookies may result in you seeing advertising that is not as relevant to you, not being able to link effectively to Facebook, Twitter or other social networks, and/or not being allowed to share content on social media."
              }
            >
              Social Media & Advertising
            </Checkbox>
          </p>
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="primary" onClick={closeDetails}>
              Done
            </Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
    </>
  );
}
