

import { BoxHeader, StyledLink } from "./Header.style"
import { PATHS } from "../../../config/paths"
import { useNavigate } from "react-router-dom";
import { clearLocalStorage, getPersistData } from "../../../utils/localstorage";
import LogoutIcon from '@mui/icons-material/Logout';
import { User } from "../../../utils/fakeData";

export const Header = () =>{
    const navigate = useNavigate();
    const handleLogout = () => {
        clearLocalStorage();
        navigate(PATHS.PRINCIPAL.LOGIN);
      };
      const user:User = getPersistData('user',true);
    return<>
        <BoxHeader>
        
            <StyledLink to={PATHS.ROOT}>
                Home
            </StyledLink>
            <StyledLink to={PATHS.PRINCIPAL.PROFILE}>
                Profile
            </StyledLink>
            {!user?<StyledLink to={PATHS.PRINCIPAL.LOGIN}>
                Login
            </StyledLink>:<LogoutIcon onClick={handleLogout}/>
}

        </BoxHeader>
    </>
}