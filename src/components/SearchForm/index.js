import { getDefaultNormalizer } from "@testing-library/dom";
import React from "react";

function SearchForm(props){
    return(
        <form className="search">
            <div className="form-group">
                <label htmlFor="employees">Employee:</label>
                <input
                value={props.search}
                onChange={props.handleInputChange}
                name="EmpSearch"
                list="EmpSearchable"
                type="text"
                className="form-control"
                placeholder="type in an employee's name"
                id="Empsearch"
                />
                <datalist id="search">
                    {props.EmpSearchable.map(EmpSearch=>(
                        <option value={EmpSearch} key={EmpSearch}/>
                    ))}
                </datalist>
                    <button type="submit" onClick={props.handleFormSubmit} className="btn btn-warning ">
                        Search
                    </button>
            </div>
        </form>
    )
}

export default SearchForm;