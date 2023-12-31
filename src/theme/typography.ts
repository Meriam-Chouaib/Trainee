import { TypographyOptions } from '@mui/material/styles/createTypography';
import { COLORS } from '../config/colors';
import { FONT } from '../config/font';

export const typography : TypographyOptions = {
    h1:{
        fontFamily:FONT,
        textAlign:'center',
        fontSize:'50px',
        fontWeight:'bold',
        color:COLORS.PRIMARY.DARK,
        marginBottom: '1.5rem',
    },
    h2:{
        fontFamily:FONT,
        textAlign:'center',
        fontSize:'30px',
        fontWeight:'bold',
        color:COLORS.PRIMARY.DARK,
    },

    h3:{
        fontFamily:FONT,
        textAlign:'center',
        fontSize:'27px',
        fontWeight:400,
        marginBottom:'1rem',
        color:COLORS.PRIMARY.DARK,
    },
}