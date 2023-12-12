"use client"
/*
| Developed by Reskue
| Filename: theme.tsx
| Author: eric@reskue.tech
*/
import { createTheme } from "@mui/material/styles";

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    cancelContained: true;
    deleteOutlined: true;
    deleteContained: true;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: "Eudoxus",
    h1: {
      color: "#080039",
      fontSmooth: "auto",
    },
    h2: {
      fontSize: "1.5rem",
      color: "#080039",
      fontWeight: "bold",
      fontSmooth: "auto",
    },
    h3: {
      fontSize: "1.25rem",
      color: "#080039",
      fontWeight: "bold",
      fontSmooth: "auto",
    },
    h4: {
      fontSize: "1rem",
      color: "#080039",
      fontWeight: "bold",
      fontSmooth: "auto",
    },
    body1: {
      fontSize: "0.875rem",
      color: "#080039",
      fontSmooth: "auto",
    },
    body2: {
      color: "#080039",
      fontSize: "0.75rem",
      fontSmooth: "auto",
    },
  },
  palette: {
    info: {
      main: "#5186EC",
    },
    warning: {
      main: "#FF6969",
    },
    error: {
      main: "#FF6969",
    },
  },
  components: {
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiSelect: {
      defaultProps: {
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: "0.625rem",
          boxShadow: "0px 6px 16px 0px rgba(8, 0, 57, 0.10)",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        // disableRipple: true,
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          border: "0.5px solid #DADAE3",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        // variant: "body1"
        variantMapping: {
          body1: "span",
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "cancelContained" },
          style: {
            color: "#5186EC",
            border: "1px solid #5186EC",
            "&:hover": {
              backgroundColor: "#E8F1FF",
              color: "#5186EC",
            },
          },
        },
        {
          props: { variant: "deleteOutlined" },
          style: {
            color: "#FF6969",
            borderColor: "#FF6969",
            border: "0.5px solid #FF6969",
            "&:hover": {
              backgroundColor: "#FF6969",
              color: "#FFFFFF",
            },
          },
        },
        {
          props: { variant: "deleteContained" },
          style: {
            color: "#FFFFFF",
            backgroundColor: "#FF6969",
            "&:hover": {
              backgroundColor: "#FF4747",
            },
          },
        },
      ],
      defaultProps: {
        // disableElevation: true,
        // disableRipple: true,
      },
      styleOverrides: {
        contained: {
          color: "white",
        },
        outlined: {
          backgroundColor: "white",
        },
        root: {
          textTransform: "none",
          fontWeight: "bold",
          fontSize: "0.875rem",
          borderRadius: "6px",
          height: "2.5rem",
          "&:hover": {
            backgroundColor: "#2161DD",
            color: "#fff",
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        filledInfo: {},
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: "0.16719rem",
          background: "rgba(8, 0, 57, 0.80)",
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          // backgroundColor: "rgba(8, 0, 57, 0.80);",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        // icon: <CheckIcon />,
      },

      styleOverrides: {
        root: {
          color: "#DADAE3",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paperAnchorLeft: {
          // to update style of onHover the left menu
          boxShadow: "8px 0px 15px rgba(0, 0, 0, 0.05)",
        },
      },
    },
    MuiTextField: {
    },
  },
});

theme.typography.h1 = {
  fontWeight: "bold",
  fontSize: "1.25rem",
  fontFamily: "Eudoxus",
  "@media (min-width:600px)": {
    // fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    // fontSize: "1.5rem",
  },
};
