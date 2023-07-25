import { getCookies, deleteCookie } from "cookies-next";

export default async function handler(req, res) {
  const cookies = getCookies({ req, res });
  for (const cookie in cookies) {
    await deleteCookie(cookie, { req, res });
  }
  res.redirect("/");
}
