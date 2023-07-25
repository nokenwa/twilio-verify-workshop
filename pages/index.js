import NavBar from "./components/navBar";
import TryNow from "./components/tryNow";
import Product from "./components/product";
import Footer from "./components/footer";
import { Box, Heading, Grid } from "@twilio-paste/core";
import COOKIES from "./components/cookies";
import { getCookie } from "cookies-next";

export default function Home({ loggedIn }) {
  return (
    <>
      <NavBar loggedIn={loggedIn} />
      <TryNow />
      <Box className="store">
        <Heading as="h1" variant="heading10">
          Welcome to the bakery
        </Heading>
        <center>
          <div className="categories">
            <Heading as="h2" variant="heading20">
              NEW Flavors
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
        <Grid>
          {Object.keys(COOKIES).map((cookie) => (
            <Product key={cookie} product={COOKIES[cookie]} />
          ))}
        </Grid>
      </Box>
      <Footer pagination />
    </>
  );
}

export async function getServerSideProps(context) {
  const jwt = require("jsonwebtoken");
  const req = context.req;
  const res = context.res;

  let token = getCookie("jwt", { req, res });

  if (token != undefined) {
    let user = jwt.verify(token, process.env.SECRET);
    return { props: { loggedIn: true, user } };
  } else {
    return { props: { loggedIn: false } };
  }
}
