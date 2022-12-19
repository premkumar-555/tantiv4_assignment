import * as React from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

export default function LinearColor() {
  return (
    <Stack
      sx={{ width: "100%", color: "grey.500", mt: "2rem", h: "15vh" }}
      spacing={2}
    >
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />
    </Stack>
  );
}
