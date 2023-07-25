import {
  Form,
  FormActions,
  Box,
  Input,
  Button,
  Text,
  Heading,
  HelpText,
} from "@twilio-paste/core";
import { useState, useEffect } from "react";
export default function MFAForm(props) {
  function RetryButton() {
    const [count, setCount] = useState({ i: 30, attempts: 1 });
    useEffect(() => {
      const interval = setInterval(() => {
        setCount({ i: count.i - 1, attempts: count.attempts });
      }, 1000);
      return () => clearInterval(interval);
    }, [count]);

    async function retryMFA(event) {
      event.preventDefault();
      const attempts = count.attempts + 1;
      const i = attempts * 30;
      setCount({ i, attempts });
      console.log(`count`, count.i);
      console.log(`attempts`, count.attempts);
      const data = {
        tel: props.tel,
        email: props.email,
        channel: props.channel,
      };
      const JSONdata = JSON.stringify(data);
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      };

      // const res = await fetch("/api/retryMfa", options);
      // const json = await res.json();
    }

    return (
      <Box margin="auto" width="200px">
        <Button
          onClick={retryMFA}
          margin
          fullWidth
          variant="secondary"
          disabled={count.i > 0}
        >
          Retry
        </Button>
        {count.i > 0 && (
          <HelpText variant="warning">Resend Code in {count.i} Secs</HelpText>
        )}
      </Box>
    );
  }

  return (
    <>
      <Form id="mfa" onSubmit={props.onSubmitHandler}>
        <Text textAlign="center" as="h3" variant="heading30">
          2FA Authentication
        </Text>

        <Input
          textAlign="center"
          type="text"
          name="code"
          min-length="6"
          max-length="6"
          pattern="^[0-9]+$"
          required
          title="Code should be 6 digits (0 to 9)"
        ></Input>
        <Text textAlign="center" variant="heading30">
          We just sent you a message via {props.channel} with your
          authentication code. Enter the code in the form above to verify your
          identity.
        </Text>
        {props.msg && <HelpText variant="error">{props.msg}</HelpText>}
        <FormActions>
          <Box margin="auto" width="200px">
            <Button type="submit" margin fullWidth>
              Validate
            </Button>
          </Box>
        </FormActions>
        {props.retryLogic && <RetryButton />}
        <Input type="hidden" value={props.tel} name="tel" />
        <Input type="hidden" value={props.email} name="email" />
      </Form>
    </>
  );
}
