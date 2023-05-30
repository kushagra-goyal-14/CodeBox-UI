import React from "react";
import { AppBar } from "@mui/material";
import shadows from "@mui/material/styles/shadows";

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#19202b",
        color: "#2196F3",
        boxShadow: "none",
        padding: "11px",
        // borderBottom: "1px solid #fff",
        "& *": {
          fontFamily: "monospace",
        },
      }}
    >
      <h1>CodeBox</h1>
    </AppBar>
  );
}

export default Navbar;
