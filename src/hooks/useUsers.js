import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";

{/* Definiendo Usuarios*/}
const initialUsers = [
    {
        id: 1,
        username: 'richard',
        password: '12345',
        email: 'richard@correo.com'
    },
];

{/* Definiendo valores vacios*/}
const initialUserForm = {
    id: 0,
    username: '',
    password: '',
    email: '',
}

export const useUsers = () =>{

    const [users, dispatch] = useReducer(usersReducer, initialUsers);
    const [userSelected, setUserSelected] = useState(initialUserForm);
    const [visibleForm, setVisibleForm] = useState(false);

    const handlerAddUser = (user) => {
        //console.log(user);
        //const type = (user.id === 0) ? 'addUser' : 'updateUser';
        
        dispatch({
            type: (user.id === 0) ? 'addUser' : 'updateUser',
            payload: user,
        })

        /* Sweet Alert - Crear y Editar*/
        Swal.fire({
            title: (user.id === 0) ? 
                "Usuario Creado": 
                "Usuario Actualizado",

            text: (user.id === 0) ?
                "El usuario ha sido creado con exito!": 
                "El usuario ha sido actualizado con exito!",
                
            icon: "success"
        });

        setVisibleForm(false);  
        setUserSelected(initialUserForm);
    }

    const handlerRemoveUser = (id) => {
        //console.log(id);

        /* Sweet Alert - Eliminar*/
        Swal.fire({
            title: "¿Esta seguro que desea eliminar?",
            text: "Cuidado el usuario sera eliminado!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: 'removeUser',
                    payload: id,
                })

                Swal.fire({
                    title: "Usuario Eliminado!",
                    text: "El usuario ha sido eliminado con exito.",
                    icon: "success"
                });
            }
        });
        handlerCloseForm();
    }

    const handlerSelectedForm = (user) => {
        //console.log(user);
        setVisibleForm(true);  
        setUserSelected({...user});
        
    }

    const handlerOpenForm = () => {
        setVisibleForm(true);
    }

    const handlerCloseForm = () => {
        setVisibleForm(false);
        setUserSelected(initialUserForm);
    }

    return {
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
}