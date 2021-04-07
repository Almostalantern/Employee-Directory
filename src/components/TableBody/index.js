import React from "react";

function TableBody(props) {
    return (<>

        {props.users.map(user => {
            return (<tr key={user.login.uuid}>
                <td><img src={user.picture.medium}></img></td>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.dob.age}</td>
            </tr>)
        })}

    </>
    )
}

export default TableBody;