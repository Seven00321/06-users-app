import { UserRow } from "./UserRow";

export const UsersList = ({ handlerSelectedForm, handlerRemoveUser, users=[] }) => {
    return (
        <table className="table table-hover table-striped">
            {/* Cabecera */}
            <thead>
                <tr>
                <th>#</th>
                <th>username</th>
                <th>email</th>
                <th>update</th>
                <th>update route</th>
                <th>remove</th>
                </tr>
            </thead>

            {/* Body */}
            <tbody>
                {users.map(({id, username, email, password}) => (
                    <UserRow 
                        key={id} 
                        id={id} 
                        username={username}
                        email={email}
                        password={password}
                        handlerSelectedForm={handlerSelectedForm}
                        handlerRemoveUser={handlerRemoveUser}
                    />
                ))}
            </tbody>
        </table>
    );
};
