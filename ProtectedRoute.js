import React, {useContext} from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../App';

const ProtectedRoute = ({
    redirectPath = '/signin',
    children
}) => {
    const [user] = useContext(UserContext);
    if (!user) {
        return <Navigate to = {redirectPath} replace />
    }
  return children ? children : <Outlet />
}

export default ProtectedRoute