import { Box, styled } from "@mui/material";
import theme from "../../../theme";

  export const BoxFooter = styled(Box)(() => ({
    width: '100%',
    backgroundColor:theme.palette.primary.dark,
    color:theme.palette.warning.light,
    textAlign:'center',
    position:'fixed',
    bottom:0,
    padding: '3px 0px',
  }));

