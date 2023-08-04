import styled from '@mui/system/styled';
import { Button } from '@mui/material';
import { FONT } from '../../../config/font';

export const ButtonStyled = styled(Button)(({ theme, color}) => ({
  fontFamily: FONT,
  fontSize: '15px',
  width: 'auto',
  padding: '8px 23px',
  fontWeight: 700, 
  transition: 'background-color 0.3s ease-in-out', 
  margin: '1rem 0px',
  '&:hover': {
    backgroundColor: `rgba(0, 0, 0, 0.7)`, 
  },
  [theme.breakpoints.down(800)]: {
    margin:'1rem 0'
  },
}));
