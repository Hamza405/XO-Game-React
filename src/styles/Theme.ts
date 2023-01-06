import { createTheme } from "@mui/material";

// --color-bg-dark: #192a33;
// --color-bg-light: #1f3640;
// --color-gray: #a8bec9;
// --color-gray-dark: #7a8991;
// --color-yellow: #f2b238;
// --color-yellow-dark: #cd8d16;
// --color-blue: #30c4be;
// --color-blue-dark: #128c89;

export const Colors = {
    primary: "#192a33",
    secondary: "#1f3640",
    success: "#4CAF50",
    info: "#00a2ff",
    danger: "#FF5722",
    warning: "#FFC107",
    dark: "#0e1b20",
    light: "#aaa",
    muted: "#abafb3",
    border: "#DDDFE1",
    inverse: "#2F3D4A",
    shaft: "#333",
    ///////////////
    // Grays
    ///////////////
    gray: "#a8bec9",
    dim_grey: "#696969",
    dove_gray: "#d5d5d5",
    body_bg: "#f3f6f9",
    light_gray: "rgb(230,230,230)",
    ///////////////
    // Solid Color
    ///////////////
    white: "#fff",
    black: "#000",
  };

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary,
        },
        secondary: {
            main: Colors.secondary
        }
    },
    typography:{
        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
        fontSize: 16,
        allVariants: {
            color:Colors.gray,
            textTransform: "uppercase",
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                disableRipple: true,
              },
        }
    }
})

export default theme;