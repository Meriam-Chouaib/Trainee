import { CustomButtonStyle } from './Button.style';
import { CustomButtonProps } from './Button.type';

export const CustomButton = ({
  isLoading,
  children,
  onClick,

}: CustomButtonProps) => {
  return (
      <CustomButtonStyle
        onClick={onClick}
        type="submit"
      >{children}
      </CustomButtonStyle>
  );
};
