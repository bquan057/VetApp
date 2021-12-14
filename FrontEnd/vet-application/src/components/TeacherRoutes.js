import { Outlet, Navigate } from "react-router";

const useAuth = () => {

    const role =sessionStorage.getItem('role')

    const user = {loggedIn: false}
    
    if (role == "Teaching Technician") {
        user.loggedIn = true
    } else {
        user.loggedIn = false
    }

    return user.loggedIn;
};

const TeacherRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/home"/>;
}


export default TeacherRoutes;