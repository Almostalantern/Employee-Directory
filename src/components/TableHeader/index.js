import React from "react";

function TableHeader(props){
    return(
        <table>
            <thead>
                <tr>
                    {props.headings.map(heading=>{
                        return(
                            <th key={heading.id}>{heading.name}</th>
                        )
                    })}
                </tr>
            </thead>
        </table>
    )
}

export default TableHeader;