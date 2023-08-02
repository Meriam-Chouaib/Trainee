import { Box, styled } from "@mui/material";
import theme from "../../../theme";
import { Link } from "react-router-dom";

export const BoxHeader = styled(Box)(() => ({
    width: '100%',
    backgroundColor:theme.palette.primary.dark,
    color:theme.palette.warning.light,
    textAlign:'center',
    padding: '1rem 0',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',

  }));

  export const StyledLink = styled(Link)`
  text-decoration: none;
  padding-inline: 9px;
  width: max-content;
  font-weight: 600;
  color:${theme.palette.warning.dark}

`;
