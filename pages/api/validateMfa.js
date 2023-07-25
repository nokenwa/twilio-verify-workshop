import { setCookie } from "cookies-next";
const jwt = require("jsonwebtoken");
import { getUserData } from "./getUserData";

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
    const code = req.body["code"];
    const tel = req.body["tel"];
    const email = req.body["email"];
    try {
      const verificationCheck = await verifyService.verificationChecks.create({
        to: tel,
        code,
      });

      if (verificationCheck.status === "approved") {
        const user = await getUserData(email);
        let token = jwt.sign({ ...user }, process.env.SECRET);
        await setCookie("jwt", token, { req, res });

        return res.status(200).json({ success: true });
      } else {
        return res.status(400).json({ msg: "Invalid Code. Please try again" });
      }
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ msg: "Something went wrong. Please try again later" });
    }
  }
}
