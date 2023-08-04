

import { BoxHeader,  StyledLink } from "./Header.style"
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import { clearLocalStorage, getPersistData } from "../../../../utils/localstorage";
import { PATHS } from "../../../../config/paths";
import { User } from "../../../../utils/fakeData";
import {Logo} from '../../../../assets/images/Logo'
import { Stack } from "@mui/material";
import { Button } from "../../../../components/Button/Button/Button";
import theme from "../../../../theme";

export const Header = () =>{
  
  return<>
        <BoxHeader>
            <Logo />
            <Stack>
<Button txt={"Sign in"} color={"white"} bgColor={theme.palette.secondary.main}  hoverColor={theme.palette.secondary.dark}  />
{/* <Button
        // txt={"Sign in"}
        color={"primary"}
        bgColor={theme.palette.secondary.main}
        hoverColor={theme.palette.secondary.dark}
      >tttteesst</Button> */}
            </Stack>
        </BoxHeader>
    </>
}