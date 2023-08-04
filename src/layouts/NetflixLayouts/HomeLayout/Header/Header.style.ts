import { Box, Stack, styled } from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../../../../theme";

export const BoxHeader = styled(Box)(() => ({
    width: '100%',
    backgroundColor:"transparent",
    color:theme.palette.warning.light,
    textAlign:'center',
    padding: '1rem 0',
    justifyContent: 'space-between',
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

export const Logo = styled(Stack)(({ theme }) => ({
    backgroundImage: `url(${require('../../../../assets/images/logoNetflix.png')})`,
width:'120px',
height:'50px',

}));
