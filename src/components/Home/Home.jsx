import IMG from "../../assets/img.png";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{ height: "92vh", backgroundColor: "background.default" }}
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "2rem",
        padding: "0rem",
      }}
    >
      <Box
        sx={{
          borderRadius: "10px",
          width: "auto",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
          padding: "2rem",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "light.main",
            fontSize: "4rem",
            fontWeight: 700,
            fontFamily: "poppins",
          }}
        >
          CodeBox
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: "light.main",
            fontSize: "2rem",
            fontWeight: 700,
            fontFamily: "poppins",

            maxWidth: 600,
          }}
        >
          CodeBox is a code editor for the web.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "primary.main",
            color: "background.secondary",
            fontSize: "1.5rem",
            fontWeight: 700,
            width: "200px",
            fontFamily: "poppins",
            borderRadius: "10px",
          }}
          onClick={() => navigate("/editor")}
        >
          Get Started
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "text.primary",
          borderRadius: "10px",
          padding: "2rem",
          height: "auto",
          width: "auto",

          gap: "1rem",
        }}
      >
        <img
          alt="Code Editor"
          src={IMG}
          style={{
            height: "70%",
            width: "100%",
            maxWidth: "auto",
            borderRadius: "10px",
            border: "1px solid #FFFFFF",
          }}
        />
      </Box>
    </Box>
  );
}

export default Home;
