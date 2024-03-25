import { useContext } from "react";
import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";
import { UserContext } from "../context/UserContext";
//import { useUsers } from "../hooks/useUsers";

// export const UsersPage = ({
//         users,
//         userSelected,
//         initialUserForm,
//         visibleForm,
    
//         handlerAddUser,
//         handlerRemoveUser,
//         handlerSelectedForm,
//         handlerOpenForm,
//         handlerCloseForm,

//     }) => {

export const UsersPage = () => {    
  
    const {
        users,
        visibleForm,
        handlerOpenForm,
    } = useContext(UserContext);

    return (
        <>
            {/* <LoginPage/> */}
        
            {!visibleForm || 
                <UserModalForm
                    
                />
            }

            <div className="container my-4">
                <h2>Users App</h2>

                <div className="row">
                    {/* UserForm */}
                    
                    {/* {!visibleForm || 
                    
                    <div className="col">
                        
                    </div>} */}
                        
                    {/* UsersList */}
                    <div className="col">
                        {visibleForm || 
                            <button 
                                className="btn btn-primary my-2"
                                onClick={handlerOpenForm}>
                                Nuevo Usuario
                            </button>
                        }
                        
                        {users.length === 0 
                            ? <div className="alert alert-warning">No hay Usuarios en el Sistema!</div>
                            : <UsersList/>
                        }
                    </div>
                </div>
            </div>

        </>
    );
}