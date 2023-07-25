import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Product from "./components/product";
import { getCookie } from "cookies-next";
import COOKIES from "./components/cookies";
import { Box, Heading, Grid, Column } from "@twilio-paste/core";

export default function Account({ loggedIn, user }) {
  return (
    <>
      <NavBar loggedIn={loggedIn} />
      <Box className="store">
        <Heading as="h1" variant="heading10">
          Welcome to your personalised bakery, {user.username}
        </Heading>
        <center>
          <div className="categories">
            <Heading as="h2" variant="heading20">
              Your Flavours
            </Heading>
            &nbsp;&nbsp; &nbsp;&nbsp;
            <Heading as="h2" variant="heading20">
              Popular
            </Heading>
            &nbsp;&nbsp; &nbsp;&nbsp;
            <Heading as="h2" variant="heading20">
              Feature
            </Heading>
            &nbsp;&nbsp; &nbsp;&nbsp;
            <Heading as="h2" variant="heading20">
              Specials
            </Heading>
          </div>
        </center>
        <Box margin="auto" maxWidth="75%">
          <Grid margin="">
            {getMultipleRandom(Object.keys(COOKIES), 4).map((cookie) => (
              <Column>
                <Product key={cookie} product={COOKIES[cookie]} discount />
              </Column>
            ))}
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
export async function getServerSideProps(context) {
  const jwt = require("jsonwebtoken");
  const req = context.req;
  const res = context.res;

  let token = getCookie("jwt", { req, res });
  if (token == undefined) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
  let user = jwt.verify(token, process.env.SECRET);

  if (user.username != undefined) {
    return { props: { loggedIn: true, user } };
  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
}

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}
