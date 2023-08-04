import React from 'react';
import { TextField, styled } from '@mui/material';
import { COLORS } from '../../../config/colors';



export const TextFieldHome = styled(TextField)`
  position: relative;
  border: 2px solid white;
  border-radius: 3px;
  width: 20rem;
  backdrop-filter: blur(10px);

  & .MuiInputBase-root {
    color: ${COLORS.GREY[100]} !important;
  }
  
  .MuiInputLabel-root {
    color: ${COLORS.GREY[100]} !important;
  }
`;


