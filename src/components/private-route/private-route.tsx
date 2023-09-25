import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';

type PrivateRouteProps = {
  authorizationStatus: string;
  redirectPath: string;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children, redirectPath} = props;

  return (
    authorizationStatus === 'OK' ? children : <Navigate to={redirectPath} />
  );
}

PrivateRoute.defaultProps = {
  redirectPath: AppRoute.Login
};

export default PrivateRoute;
