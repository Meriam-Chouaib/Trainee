import { ButtonStyled } from "./Button.style";

interface ButtonProps {
    txt:string;
    color:string;
    bgColor:string;
    hoverColor?:string;
    isLoading?:boolean;
    onClick?:() => void;
    width?:string;
    height?:string;
    icon?: React.ReactNode;
    margin?:string;
    fontSize?:string;
    
}

export const Button = ({txt,color,bgColor,hoverColor, isLoading,onClick,width,height,icon,margin,fontSize}: ButtonProps) => {
        return (
    <ButtonStyled sx={{height:`${height}`, width:`${width}`, color:`${color}`,backgroundColor:`${bgColor}`,margin:`${margin}` , fontSize:`${fontSize}`}} onClick={onClick} endIcon={icon}   >
    {
        isLoading? "...": txt
    }        
        
    </ButtonStyled>

    )
}


