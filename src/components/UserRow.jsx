import React from "react";
import { NavLink } from "react-router-dom";

export const UserRow = ({ handlerSelectedForm, handlerRemoveUser, id, username, email, password }) => {

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
