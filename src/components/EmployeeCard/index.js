import React from "react";
import "./style.css";

function employeeCard(props){
    return(
        <div className="card">
            <div className="img-container">
                {/* img and src go here */}
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Email:</strong>{props.email}
                    </li>
                    <li>
                        <strong>Phone Number:</strong>{props.phone}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default employeeCard;