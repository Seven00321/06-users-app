import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";
import { useUsers } from "../hooks/useUsers";

export const UsersPage = () => {

    const {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
    
        handlerAddUser,
        handlerRemoveUser,
        handlerSelectedForm,
        handlerOpenForm,
        handlerCloseForm,

    } = useUsers();

    return (
        <>
            {/* <LoginPage/> */}
        
            {!visibleForm || 
                <UserModalForm
                    userSelected={userSelected}
                    initialUserForm={initialUserForm}
                    handlerAddUser={handlerAddUser}
                    handlerCloseForm={handlerCloseForm}
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
                            : <UsersList 
                                handlerSelectedForm={handlerSelectedForm}
                                handlerRemoveUser={ handlerRemoveUser }
                                users={ users }
                            />
                        }
                    </div>
                </div>
            </div>

        </>
    );
}