import { createTheme } from "@mui/material/styles";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2196F3",
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        borderRadius: "10px",
        label: {
          color: "#FFFFFF",
        },
      },
    },
  },
});

export default darkTheme;
