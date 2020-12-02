import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0E0E52";
const arcOrange = "#169873";

// red #ff0000
// Midnight Blue ------> 0E0E52

// 0B72B9
// green #00ff00

export default createMuiTheme({
  palette: {
    common: {
      arcBlue: `${arcBlue}`,
      arcOrange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Arial",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
  },
});
