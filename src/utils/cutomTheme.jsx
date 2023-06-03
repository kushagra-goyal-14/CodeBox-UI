import { createTheme } from "@mui/material/styles";
export const orangeTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FF7722",
      //#2196F3
      // #FF7722
    },
    background: {
      default: "#1f1e1d",
      secondary: "#FFFFFF",
      //   #19202b
      // #1f1e1d
    },
    text: {
      primary: "#181715",
      //  #001e3c
      // #181715
    },
    light: {
      main: "#FFFFFF",
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

export const blueTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2196F3",
      //#2196F3
      // #FF7722
    },
    background: {
      default: "#19202b",
      //   #19202b
      // #1f1e1d
    },
    text: {
      primary: "#001e3c",
      secondary: "#FFFFFF",
      //  #001e3c
      // #181715
    },
    light: {
      main: "#FFFFFF",
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

export const greenTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "rgb(144, 214, 208)",
      //#2196F3
      // #FF7722
    },
    background: {
      default: "#101426",
      //   #19202b
      // #1f1e1d
    },
    text: {
      primary: "#222B45",
      secondary: "#000",
      //  #001e3c
      // #181715
    },
    light: {
      main: "#FFFFFF",
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

export const yellowTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FFBA09",
      //#2196F3
      // #FF7722
    },
    background: {
      default: "#1f1e1d",
      //   #19202b
      // #1f1e1d
    },
    text: {
      primary: "#181715",
      secondary: "#000",
      //  #001e3c
      // #181715
    },
    light: {
      main: "#FFFFFF",
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

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#7ca8eb",
      //#2196F3
      // #FF7722
    },
    background: {
      default: "#cfd7e3",
      //   #19202b
      // #1f1e1d
    },
    text: {
      primary: "#001e3c",
      //  #001e3c
      // #181715
    },
    light: {
      main: "#000",
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
