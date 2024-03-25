import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";

// export const UserForm = ({ handlerCloseForm, userSelected, handlerAddUser, initialUserForm }) =>{
export const UserForm = ({ userSelected, handlerCloseForm }) =>{
    // Funciones
    const { initialUserForm, handlerAddUser } = useContext(UserContext);

    const [userForm, setUserForm] = useState(initialUserForm);

    const { id, username, password, email} = userForm;

    useEffect(()=> {
        setUserForm({
            ...userSelected,
            password: ''
        });
    }, [userSelected]);


    const onInputChange = ({target}) => {
        //console.log(target.value);            
        const {name, value} = target;

        setUserForm({
            ...userForm,
            [name]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();

        // Verificar que los datos esten llenos
        if(!username || (!password && id === 0) || !email){
            //alert('Debe completar los campos del formulario!')

            {/* Sweet Alert - Alerta*/}
            Swal.fire({
                title: "Error de validación",
                text: "Debe completar los campos del formulario!",
                icon: "error"
            });

            return;
        }

        if(!email.includes('@')){
            {/* Sweet Alert - Alerta*/}
            Swal.fire({
                title: "Error de validación",
                text: "El email debe ser valido, incluir un @!",
                icon: "error"
            });

            return;
        }
        //console.log(userForm);

        // Guardar el userForm en el listado de usuarios
        handlerAddUser(userForm);
        setUserForm(initialUserForm);
    }

    const onCloseForm = () => {
        handlerCloseForm();
        setUserForm(initialUserForm);
    }


    return(
        <>
            <form onSubmit={onSubmit}>
                {/*Input username */}
                <input 
                    type="text"  
                    className="form-control my-3 w-75"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={ onInputChange}
                />

                {/*Input password */}
                {id > 0 || <input 
                    type="password"  
                    className="form-control my-3 w-75"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={ onInputChange}
                />}

                {/*Input email */}
                <input 
                    type="text"  
                    className="form-control my-3 w-75"
                    placeholder="E-mail"
                    name="email"
                    value={email}
                    onChange={ onInputChange}
                />

                {/*Input id */}
                <input 
                    type="hidden"  
                    name="id"
                    value={id}
                />

                {/*Button Create */}
                <button 
                    type="submit"  
                    className="btn btn-primary"
                    name="btnCreate"
                >
                    {id > 0? 'Editar': 'Crear'}
                </button>

                {/*Button Cerrar */}

                { !handlerCloseForm || 
                    <button 
                        className="btn btn-primary mx-2"
                        type="button"
                        onClick={()=>onCloseForm()}
                    >
                        Cerrar
                    </button>
                
                }

                

            </form>
            
        </>
    )
}