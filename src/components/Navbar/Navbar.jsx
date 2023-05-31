import React from "react";
import { AppBar, Button, Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#19202b",
        color: "#2196F3",
        boxShadow: "none",
        "& *": {
          fontFamily: "monospace",
        },
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        maxWidth="xl"
      >
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontSize: "1.5rem",
            fontFamily: "poppins",
            fontWeight: 700,
            color: "#2196F3",
            letterSpacing: ".3rem",
            textDecoration: "none",
          }}
        >
          CodeBox
        </Typography>
        {/* <h1>CodeBox</h1> */}
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Button
            onClick={() => navigate("/")}
            sx={{
              mx: 2,
              my: 2,
              display: "block",
              fontWeight: "bold",
              fontSize: "1rem",
              letterSpacing: ".1rem",
              "&:hover": {
                transform: "scale(.8)",
                boxShadow: "0 5px 10px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            Home
          </Button>
          <Button
            onClick={() => navigate("/editor")}
            sx={{
              mx: 2,
              my: 2,
              display: "block",
              fontWeight: "bold",
              fontSize: "1rem",
              letterSpacing: ".1rem",
              "&:hover": {
                transform: "scale(.8)",
                boxShadow: "0 5px 10px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            Editor
          </Button>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Navbar;
