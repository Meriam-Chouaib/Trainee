import { Button, styled } from "@mui/material";
import { FONT } from "../../../config/font";



export const ButtonStyled = styled(Button)(({ theme }) => ({
  fontFamily: FONT,
  fontSize: '15px',
  width: 'auto',
  padding: '8px 23px',
  fontWeight: 700,
  boxShadow: `1px 1px 8px -2px ${theme.palette.grey[300]}`,
  transition: 'background-color 0.3s ease-in-out', 
  margin: '1rem 0px',
  '&:hover': {
    backgroundColor:  theme.palette.primary.main,
    color:  theme.palette.warning.dark,
  },
}));
