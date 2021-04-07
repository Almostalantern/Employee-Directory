import React from "react";
import TableHeader from "../TableHeader";
import TableBody from "../TableBody";
import SearchForm from "../SearchForm";

function Datatable(props){
    return (<>
        <SearchForm
        search={props.search}
        />
        <TableHeader 
        headings={props.headings}
        />
        <TableBody
        users={props.users}/>
        </>
    )
}

export default Datatable;