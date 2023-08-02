import { ButtonStyled } from "./ButtonLarge.style";

interface ButtonProps {
    txt:string;
    color:string;
    bgColor:string;
    hoverColor?:string;
    isLoading?:boolean;
    onClick?:() => void;
}

export const ButtonLarge = ({txt,color,bgColor,hoverColor, isLoading,onClick}: ButtonProps) => {
        return (
    <ButtonStyled sx={{color:`${color}`,backgroundColor:`${bgColor}`}} onClick={onClick}  >
    {
        isLoading? "...": txt
    }        
        
    </ButtonStyled>

    )
}


