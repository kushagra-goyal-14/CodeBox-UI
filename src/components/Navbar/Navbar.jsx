import React from "react";
import { AppBar, Button, Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CustomContext } from "../../utils/customContext";
import { useContext } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import {
  blueTheme,
  orangeTheme,
  yellowTheme,
  greenTheme,
} from "../../utils/cutomTheme";

function Navbar() {
  const navigate = useNavigate();
  const { theme, setTheme } = useContext(CustomContext);
  return (
    <AppBar
      position="static"
      sx={{
        color: "#2196F3",
        boxShadow: "none",
        "& *": {
          fontFamily: "poppins",
        },
      }}
    >
      <Container
        sx={{
          display: "flex",
          backgroundColor: "background.default",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        maxWidth="xllg"
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
            color: "light.main",
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
              color: "light.main",
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
            onClick={() => {
              navigate("/editor");
            }}
            sx={{
              mx: 2,
              my: 2,
              display: "block",
              color: "light.main",
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
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <CircleIcon
            onClick={() => setTheme(orangeTheme)}
            sx={{
              color: "#FF7722",
              border: "1px solid #FFFFFF",
              borderRadius: "50%",
              marginLeft: "3.5px",
              marginRight: "3.5px",
              cursor: "pointer",
            }}
          />
          <CircleIcon
            onClick={() => setTheme(greenTheme)}
            sx={{
              color: "rgb(144, 214, 208)",
              border: "1px solid #FFFFFF",
              borderRadius: "50%",
              marginLeft: "3.5px",
              marginRight: "3.5px",
              cursor: "pointer",
            }}
          />
          <CircleIcon
            onClick={() => setTheme(blueTheme)}
            sx={{
              color: "#2196F3",
              border: "1px solid #FFFFFF",
              borderRadius: "50%",
              marginLeft: "3.5px",
              marginRight: "3.5px",
              cursor: "pointer",
            }}
          />
          <CircleIcon
            onClick={() => setTheme(yellowTheme)}
            sx={{
              color: "#FFBA09",
              border: "1px solid #FFFFFF",

              borderRadius: "50%",
              marginLeft: "3.5px",
              marginRight: "3.5px",
              cursor: "pointer",
            }}
          />
        </Box>
      </Container>
    </AppBar>
  );
}

export default Navbar;
