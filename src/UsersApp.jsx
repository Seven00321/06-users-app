import { LoginPage } from "./auth/pages/LoginPage"
// import { UsersPage } from "./pages/UsersPage"
// import { Navbar } from "./components/layout/Navbar"
import { useAuth } from "./auth/hooks/useAuth"
import { UserRoutes } from "./routes/UserRoutes"
import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./auth/context/AuthContext";



export const UsersApp = () => {

    const { login } = useContext(AuthContext);

    return (
        <Routes>
            {/* <UsersPage/> */}
            {login.isAuth
                ? (
                    <Route path='/*' element={ <UserRoutes />}/>   
                )
                : (
                    <>
                        <Route path='/login' element={<LoginPage/>}/>

                        <Route path='/*' element={<Navigate to="/login"/>}/>
                    </>
                )
            }

        </Routes>
    )
}
