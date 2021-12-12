import { Outlet, Navigate } from "react-router";

const useAuth = () => {
    
    const token =sessionStorage.getItem('token')

    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    
    const userInfo = JSON.parse(window.atob(base64));

    const usertype = userInfo.role

    const user = {loggedIn: false}

    if (usertype == "ROLE_ADMIN" || usertype == "ROLE_TECHNICIAN") {
        user.loggedIn = true
    } else {
        user.loggedIn = false
    }

    return user && user.loggedIn;
};

const AdminRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/home"/>;
}


export default AdminRoutes;