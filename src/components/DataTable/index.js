import React from "react";
import TableHeader from "../TableHeader";
import TableBody from "../TableBody";


function Datatable(props){
    return (<>
        <TableHeader 
        headings={props.headings}
        />
        <TableBody
        users={props.users}/>
        </>
    )
}

export default Datatable;