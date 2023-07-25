import { setCookie, getCookies } from "cookies-next";
import { getUserData, getUserPassword } from "./getUserData";
const { createHash } = require("node:crypto");
const jwt = require("jsonwebtoken");

const twilio = require("twilio")(
  process.env.TWILIO_API_KEY,
  process.env.TWILIO_API_SECRET,
  { accountSid: process.env.TWILIO_ACCOUNT_SID }
);
const verifyService = twilio.verify.v2.services(
  process.env.TWILIO_VERIFY_SERVICE
);

export default async function handler(req, res) {
  if (req.method == "POST") {
    const tel = req.body["tel"];
    const email = req.body["email"];
    const channel = req.body["channel"];

    try {
      await verifyService.verifications.create({
        to: tel,
        channel: channel,
      });
      return res.status(200).json({
        success: true,
        verification: channel,
        address: user.tel,
        email: email,
      });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ msg: "Something went wrong. Please try again" });
    }
  } else {
    return res
      .status(400)
      .json({ success: false, msg: "Incorrect username or password" });
  }
}
