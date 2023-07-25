import React from "react";
import { Box, Stack, Button } from "@twilio-paste/core";
import CookieDialog from "./cookieDialog";

export default function Footer({ pagination }) {
  const [cookieDialogOpen, setCookieDialogOpen] = React.useState();

  const openCookieDialog = () => setCookieDialogOpen(true);
  const closeCookieDialog = () => setCookieDialogOpen(false);

  return (
    <>
      <div className="pagination">
        {pagination && (
          <center>
            <img src="/pagination.png" alt="Pagination" />
          </center>
        )}
      </div>
      <div className="footer">
        <center>
          <img src="/footer.png" alt="footer" />
        </center>
      </div>
      <Box className="cookie-settings-button">
        <Stack
          element="FOOTER"
          orientation="horizontal"
          style={{ width: "100%" }}
        >
          {/*<p>Copyright © 2022 Twilio, Inc.</p>*/}
          <p>&nbsp;</p>
          <Button variant="link" onClick={openCookieDialog}>
            Cookie Settings
          </Button>
        </Stack>
      </Box>
      {/* <CookieDialog open={cookieDialogOpen} onClose={closeCookieDialog} /> */}
    </>
  );
}
