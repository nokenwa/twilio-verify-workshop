import { getUserData, getUserPassword } from "./getUserData";
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
    const email = req.body["email"];
    const guess = req.body["password"];

    const users = await getUserData(email);
    if (users.length == 0) {
      return res
        .status(400)
        .json({ msg: "This email doesn't match any on our records" });
    }
    const user = users[0];
    const password = await getUserPassword(email);
    if (password == guess) {
      //STEP 1 SMS 2FA
      try {
        await verifyService.verifications.create({
          to: user.tel,
          channel: "sms",
        });
        return res.status(200).json({
          success: true,
          verification: "sms",
          tel: user.tel,
          email: email,
        });
      } catch (error) {
        return res
          .status(400)
          .json({ msg: "Something went wrong. Please try again" });
      }

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
  }
}
