import { createMuiTheme } from "@material-ui/core/styles"

export default createMuiTheme({
  palette: {
    primary: {
      contrastText: "#282828",
      main: "#39D093",
      dark: "#19A298",
      light: "#C5E2E0"
    },
    secondary: {
      main: "#FFFFFF",
      contrastText: "#282828"
    },
    common: {
      white: "#FFFFFF",
      black: "#495057"
    },
    grey: {
      100: "#F7F7F7",
      200: "#E3e3e3",
      300: "#E9EBF2",
      500: "#6F6F6F"
    },
    danger: "#E31E49",
    warning: "#EB9E09",
    success: "#66BD7D"
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
