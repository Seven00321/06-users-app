import { useUsers } from "../hooks/useUsers";
import { UserContext } from "./UserContext"

export const UserProvider = ({children}) => {

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
        <UserContext.Provider value={
            {
                users,
                userSelected,
                initialUserForm,
                visibleForm,
            
                handlerAddUser,
                handlerRemoveUser,
                handlerSelectedForm,
                handlerOpenForm,
                handlerCloseForm,
            }   
        }>
            {children}
        </UserContext.Provider>
    )
}
