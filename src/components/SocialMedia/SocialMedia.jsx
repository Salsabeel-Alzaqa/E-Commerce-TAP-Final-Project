import React from "react";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import {
  Instagram,
  Twitter,
  YouTube,
  FacebookOutlined,
} from "@mui/icons-material";

export const SocialMedia = () => {
  return (
    <Grid item xs={12} sm={4} sx={{ padding: 1 }}>
      <Link href="https://www.facebook.com/" color="inherit">
        <FacebookOutlined />
      </Link>
      <Link
        href="https://www.instagram.com/"
        color="inherit"
        sx={{ padding: 1 }}
      >
        <Instagram />
      </Link>
      <Link href="https://www.twitter.com/" color="inherit">
        <Twitter />
      </Link>
      <Link href="https://www.youtube.com/" color="inherit" sx={{ padding: 1 }}>
        <YouTube />
      </Link>
    </Grid>
  );
};
