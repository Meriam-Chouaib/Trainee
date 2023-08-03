import { useRoutes } from "react-router-dom";
import { PATHS } from "../config/paths";
import { PrincipalLayout } from "../layouts/PrincipalLayout/PrincipalLayout";
import ProfilePage from "../pages/ProfilePage";
import LoginPage  from "../pages/LoginPage";
import { PrincipalGuard } from "../guards/GuardPrincipal/GuardPrincipal";
import HomePage from "../pages/HomePage";

export default function Router(){
    return useRoutes([{
        path:PATHS.ROOT,
        element:<PrincipalLayout />,
        children:[
            {
                path:PATHS.ROOT,
                element:
                <HomePage />
            },
            {
            path:PATHS.PRINCIPAL.PROFILE,
            element:<PrincipalGuard><ProfilePage /></PrincipalGuard>,
        },{
            path:PATHS.AUTH.LOGIN,
            element:
             
            <LoginPage />
             
        }
    ],
    }])
}