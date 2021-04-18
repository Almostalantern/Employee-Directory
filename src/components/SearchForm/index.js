import React from "react";

function SearchForm({handleInputChange}){
    return(
        <form className="search">
            <div className="form-group">
                <label htmlFor="employees">Employee:</label>
                <input
                onChange={e => handleInputChange(e)}
                name="EmpSearch"
                list="EmpSearchable"
                type="text"
                className="form-control"
                placeholder="type in an employee's name"
                id="Empsearch"
                />
            </div>
        </form>
    )
}

export default SearchForm;