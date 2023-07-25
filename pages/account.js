import NavBar from "./components/navBar";
import TryNow from "./components/tryNow";
import Product from "./components/product";
import Footer from "./components/footer";
import { Box, Heading, Grid } from "@twilio-paste/core";
import COOKIES from "./components/cookies";
import { getCookie } from "cookies-next";

export default function Account({ loggedIn, user }) {
  return (
    <>
      <NavBar loggedIn={loggedIn} />
      <h1>Welcome {user.username}</h1>
      <Footer />
    </>
  );
}
export async function getServerSideProps(context) {
  const jwt = require("jsonwebtoken");
  const req = context.req;
  const res = context.res;

  let token = getCookie("jwt", { req, res });
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
