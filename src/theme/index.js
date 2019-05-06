import { createMuiTheme } from "@material-ui/core/styles"

export default createMuiTheme({
  palette: {
    primary: {
      contrastText: "#282828",
      main: "#39D093",
      dark: "#19a298",
      light: "#c5e2e0"
    },
    secondary: {
      main: "#FFFFFF",
      contrastText: "#282828"
    },
    common: {
      white: "#FFFFFF",
      black: "#282828"
    },
    grey: {
      100: "#F7F7F7",
      200: "#E3e3e3",
      500: "#6F6F6F"
    }
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 600,
    black: 900
  },
  typography: { useNextVariants: true }
})
