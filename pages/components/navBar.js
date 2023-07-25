import Link from "next/link";
import { Stack } from "@twilio-paste/core/stack";
import { Box } from "@twilio-paste/core/box";
import { Button } from "@twilio-paste/core/button";
import LoginModal from "./loginModal";
import LogoutModal from "./logoutModal";

export default function NavBar({ loggedIn }) {
  return (
    <>
      <div className="sale-banner">
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td>Call Us: +8800701-800300</td>
              <td style={{ textAlign: "center" }}>
                Take 30% off when you spend $99 or more with code:
                "HappyCookie". <u>More details</u>
              </td>
              <td style={{ textAlign: "right" }}>
                Facebook &nbsp;&nbsp; Twitter &nbsp;&nbsp; Instagram
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Box marginBottom="space50" className="NavBar">
        <Stack
          element="NAVBAR"
          orientation="horizontal"
          spacing="space40"
          style={{ width: "100%" }}
        >
          <Link href="/">
            <img className="logo" src="/logo.png" alt="Party Cookies Logo" />
          </Link>
          <Stack orientation="horizontal" spacing="space60">
            {loggedIn && (
              <Button as="a" href="/account" variant="primary">
                My Account
              </Button>
            )}
            {!loggedIn ? <LoginModal /> : <LogoutModal />}
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
