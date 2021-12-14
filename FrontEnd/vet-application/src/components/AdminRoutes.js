import { Outlet, Navigate } from "react-router";

const useAuth = () => {
    const role = sessionStorage.getItem('role')

    const user = {loggedIn: false}

    if (role == "Admin" || role == "Health Technician") {
        user.loggedIn = true
    } else {
        user.loggedIn = false
    }

    return user.loggedIn;
};

const AdminRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/home"/>;
}


export default AdminRoutes;