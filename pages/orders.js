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
      <NavBar loggedIn />
      <h1>{user.username}'s Orders</h1>
      <Footer />
    </>
  );
}
export async function getServerSideProps(context) {
  const jwt = require("jsonwebtoken");
  const req = context.req;
  const res = context.res;

  let token = getCookie("jwt", { req, res });
  console.log(token);

  if (token != undefined) {
    let user = jwt.verify(token, process.env.SECRET);
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
