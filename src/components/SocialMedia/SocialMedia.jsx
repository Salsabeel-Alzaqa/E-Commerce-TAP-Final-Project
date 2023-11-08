import React from "react";
import Link from "@mui/material/Link";
import { Instagram, Twitter, YouTube } from "@mui/icons-material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { Box } from "@mui/material";

export const SocialMedia = () => {
  return (
    <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
      <Link
        href="https://www.facebook.com/"
        target="_blank"
        sx={{
          color: "#639599",
          display: "block",
        }}
      >
        <FacebookRoundedIcon sx={{ fontSize: 38 }} />
      </Link>

      <Link
        href="https://www.instagram.com/"
        target="_blank"
        sx={{
          color: "#639599",
          display: "block",
        }}
      >
        <Instagram sx={{ fontSize: 38 }} />
      </Link>

      <Link
        href="https://www.twitter.com/"
        target="_blank"
        sx={{
          color: "#639599",
          display: "block",
        }}
      >
        <Twitter sx={{ fontSize: 38 }} />
      </Link>

      <Link
        href="https://www.youtube.com/"
        target="_blank"
        sx={{
          color: "#639599",
          display: "block",
        }}
      >
        <YouTube sx={{ fontSize: 38 }} />
      </Link>
    </Box>
  );
};
