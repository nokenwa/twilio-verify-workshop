import NavBar from "./components/navBar";
import TryNow from "./components/tryNow";
import Product from "./components/product";
import Footer from "./components/footer";
import {
  Box,
  Card,
  Button,
  Heading,
  Grid,
  FormActions,
  Form,
  FormSectionHeading,
  Input,
  Text,
} from "@twilio-paste/core";
import COOKIES from "./components/cookies";
import { getCookie } from "cookies-next";

export default function SMSMFA({ tel, username }) {
  return (
    <>
      <NavBar />
      <Card
        padding="space200"
        borderRadius="borderRadius20"
        borderStyle="solid"
        borderWidth="borderWidth10"
        borderColor="colorBorderPrimary"
        margin="space200"
        width="size100"
        textAlign="center"
      >
        <Text
          as="h1"
          fontSize="fontSize80"
          textAlign="center"
          marginBottom="space60"
        >
          Multifactor Authentication
        </Text>
        <Box margin="auto" maxWidth="400px">
          <Form action="/api/validateMfa" method="POST">
            <Input type="hidden" value={tel} name="tel" />
            <Input type="hidden" value={username} name="username" />
            <Input textAlign="center" type="password" name="code"></Input>
            <Text textAlign="center" variant="heading30">
              We just sent you a message via SMS with your authentication code.
              Enter the code in the form above to verify your identity.
            </Text>
            <FormActions>
              <Box margin="auto" width="200px">
                <Button type="submit" margin fullWidth>
                  Validate
                </Button>
              </Box>
            </FormActions>
          </Form>
        </Box>
      </Card>
      <Footer />
    </>
  );
}
export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  const tel = getCookie("tel", { req, res });
  const username = getCookie("username", { req, res });
  return { props: { tel, username } };
}
