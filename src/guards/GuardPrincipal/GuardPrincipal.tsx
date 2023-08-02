import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { PATHS } from '../../config/paths';
import { getPersistData } from '../../utils/localstorage';


interface PrincipalGuardProps {
  children: ReactNode;
}
export function PrincipalGuard({ children }: PrincipalGuardProps) {
const user = getPersistData('user',true)
console.log("usssreeeeerrr",user);

  if (user===undefined) {
    return <Navigate to={PATHS.PRINCIPAL.LOGIN} replace />;
  }
  return <>{children}</>;
}
