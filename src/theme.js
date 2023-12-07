import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#FCF5ED",
    },primary:{
      main:"#F4BF96"
    }
    ,text:{
      primary:'#1F1717'
    }
  },
  typography: {
    fontFamily: "Hedvig Letters Serif",
  },
});
export default theme;
