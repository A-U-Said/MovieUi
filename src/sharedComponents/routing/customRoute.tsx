import React from "react";
import { Navigate, Path, useLocation } from "react-router-dom";
import { tokenStorage } from "@/services";
import { defaultRoutes } from "@/configuration";


interface ICustomRouteProps extends React.PropsWithChildren {
  path?: string;
  noAuth?: boolean;
  redirectTo?: string | Partial<Path>;
  redirectIfAuthenticated?: boolean;
}


const CustomRoute : React.FC<ICustomRouteProps> = ({
  noAuth,
  redirectTo,
  redirectIfAuthenticated,
  children,
}) => {

  const location = useLocation();
  const authenticated = tokenStorage.getDecodedAccessToken() != null;

  if (redirectIfAuthenticated && authenticated) {
    return <Navigate to={defaultRoutes.home} />;
  }

  if (!authenticated && !noAuth) {
    return <Navigate to={`${defaultRoutes.login}`} state={{ preAuthLocation: location }} />;
  }

  return redirectTo ? <Navigate to={redirectTo} /> : children;
};


export default CustomRoute;
