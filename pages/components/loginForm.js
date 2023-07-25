import {
  Form,
  FormControl,
  FormActions,
  Label,
  Input,
  Button,
  HelpText,
} from "@twilio-paste/core";

export default function loginForm(props) {
  return (
    <>
      <Form onSubmit={props.onSubmitHandler} method="POST" id="login">
        <FormControl>
          <Label htmlFor="email">Email</Label>
          <Input name="email" id="email" type="text" />
        </FormControl>
        <FormControl>
          <Label htmlFor="password">Password</Label>
          <Input
            name="password"
            id="password"
            type="password"
            autocomplete="current-password"
          />
        </FormControl>
        {props.msg && <HelpText variant="error">{props.msg}</HelpText>}
        <FormActions>
          <Button type="submit" variant="primary" fullWidth>
            Login
          </Button>
        </FormActions>
      </Form>
    </>
  );
}
