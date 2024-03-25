import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const UserRow = ({ id, username, email, password }) => {

    const {handlerSelectedForm, handlerRemoveUser} = useContext(UserContext);
    return (
        <tr>
        <td>{id}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>
            <button 
                type="button" 
                className="btn btn-secondary btn-sm"
                onClick={()=>handlerSelectedForm({
                    id,
                    username,
                    email,
                    password
                })}
            >
            Update
            </button>
        </td>

        <td>
            <NavLink
                className="btn btn-secondary btn-sm"
                to={'/users/edit/' + id}
            >
            Update Route
            </NavLink>
        </td>

        <td>
            <button 
                type="button" 
                className="btn btn-danger btn-sm"
                onClick={()=>handlerRemoveUser(id)}
            >
            Remove
            </button>
        </td>
        </tr>
    );
};
