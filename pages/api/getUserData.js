import { setCookie, getCookies } from "cookies-next";
const { createHash } = require("node:crypto");

const twilio = require("twilio")();
const verifyService = twilio.verify.v2.services(
  process.env.TWILIO_VERIFY_SERVICE
);

export default async function handler(req, res) {
  if (req.method == "POST") {
    const username = req.body["username"];
    const guess = req.body["password"];

    if (users.length == 0) {
      res.redirect("/login?msg=Incorrect username or password");
      return;
    }
    const user = users[0];
    const guess_hash = createHash("sha256").update(guess).digest("hex");
    console.log(guess_hash);
    if (
      guess_hash == createHash("sha256").update(user.password).digest("hex")
    ) {
      await setCookie("tel", user.tel, { req, res });
      await setCookie("username", user.username, { req, res });
      await verifyService.verifications.create({
        to: user.tel,
        channel: "sms",
      });
      res.redirect("/smsauth");
    } else {
      res.redirect("/login?msg=Incorrect username or password");
    }
  } else {
    res.redirect("/fail");
  }
}

export async function getUserData(email) {
  const users = fakeDB.filter((user) => {
    return user.email === email;
  });

  const passwordlessUsers = users.map(({ password, ...users }) => users);
  return passwordlessUsers;
}
export async function getUserPassword(email) {
  const users = fakeDB.filter((user) => {
    return user.email === email;
  });
  return users[0].password;
}
const fakeDB = [
  {
    username: "chatterboxcoder",
    password: "password",
    email: "nokenwa@chatterboxcoder.me",
    tel: "+447947574148",
    preferredMFA: "whatsapp",
  },
];
