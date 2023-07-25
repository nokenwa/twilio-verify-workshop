import { setCookie } from "cookies-next";
import { getUserData, getUserPassword } from "./getUserData";
const jwt = require("jsonwebtoken");

export default async function handler(req, res) {
  if (req.method == "POST") {
    const email = req.body["email"];
    const guess = req.body["password"];

    //Retrieve User from Fake Database
    const users = await getUserData(email);
    if (users.length == 0) {
      res.redirect("/login?msg=Incorrect username or password");
      return;
    }
    const user = users[0];

    //Compare passwords
    const password = await getUserPassword(email);
    if (password == guess) {
      //Sign JWT Token and add to cookie
      let token = jwt.sign({ ...user }, process.env.SECRET);
      await setCookie("jwt", token, { req, res });

      //Respond with Success
      return res.status(200).json({ success: true });
    } else {
      return res
        .status(400)
        .json({ success: false, msg: "Incorrect username or password" });
    }
  } else {
    res.redirect("/fail");
  }
}
