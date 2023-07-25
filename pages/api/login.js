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
  console.log("hello");
  if (req.method == "POST") {
    const email = req.body["email"];
    const guess = req.body["password"];

    const users = await getUserData(email);
    if (users.length == 0) {
      res.redirect("/login?msg=Incorrect username or password");
      return;
    }
    const user = users[0];
    const password = await getUserPassword(email);
    if (password == guess) {
      //STARTING STATE
      let token = jwt.sign({ ...user }, process.env.SECRET);
      await setCookie("jwt", token, { req, res });
      return res.status(200).json({ success: true });

      //STEP 1 SMS 2FA
      // try {
      //   await verifyService.verifications.create({
      //     to: user.tel,
      //     channel: "sms",
      //   });
      //   return res.status(200).json({
      //     success: true,
      //     verification: "sms",
      //     address: user.tel,
      //     email: email,
      //   });
      // } catch (error) {
      //   return res
      //     .status(400)
      //     .json({ msg: "Something went wrong. Please try again" });
      // }

      // //STEP 2 Multichannel 2FA
      // try {
      // await verifyService.verifications.create({
      //   to: user.tel,
      //   channel: user.preferredMFA,
      // });
      //   return res.status(200).json({
      //     success: true,
      //     channel: user.preferredMFA,
      //     tel: user.tel,
      //     email: email,
      //   });
      // } catch (error) {
      //   return res
      //     .status(400)
      //     .json({ msg: "Something went wrong. Please try again" });
      // }
    } else {
      return res
        .status(400)
        .json({ success: false, msg: "Incorrect username or password" });
    }
  } else {
    res.redirect("/fail");
  }
}
