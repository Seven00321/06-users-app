import { LoginPage } from "./auth/pages/LoginPage"
// import { UsersPage } from "./pages/UsersPage"
// import { Navbar } from "./components/layout/Navbar"
import { useAuth } from "./auth/hooks/useAuth"
import { UserRoutes } from "./routes/UserRoutes"
import { Navigate, Route, Routes } from "react-router-dom";



export const UsersApp = () => {

    const { login, handlerLogin, handlerLogout} = useAuth();

    return (
        <Routes>
            {/* <UsersPage/> */}
            {login.isAuth
                ? (
                    <>
                        {/* <Navbar login={login} handlerLogout={handlerLogout} /> */}
                        {/* <UsersPage /> */}
                        <Route path='/*' element={ 

                            <UserRoutes 
                                login={login} 
                                handlerLogout={handlerLogout}
                            />

                        }/>
                    </>    
                )
                : (
                    <>
                        <Route path='/login' element={
                            <LoginPage handlerLogin={handlerLogin}/>
                        }/>

                        <Route path='/*' element={ 
                            <Navigate to="/login"/>
                        }/>
                    </>
                )
            }

        </Routes>
    )
}
