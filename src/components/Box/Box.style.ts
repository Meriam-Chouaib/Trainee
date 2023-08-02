import { Box, styled } from "@mui/material";
import theme from "../../theme";

export const BoxCard = styled(Box)(() => ({
     width: '80%',
    backgroundColor:theme.palette.warning.dark,
    color:theme.palette.warning.light,
    textAlign:'center',
        borderRadius: '12px',
    boxShadow: '0px 5px 15px gray',
    padding: '1rem',
  }));