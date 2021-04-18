import React,{Component} from "react";
import API from "../../utils/API"
import Datatable from "../DataTable"
import SearchForm from "../SearchForm";





class Main extends Component{
    state = {
        users: [],
        filteredUsers:[],
        order: "descend",
    }
    headings=[
        {name: "Image", id:1},
        {name: "Name", id:2},
        {name: "Phone", id:3},
        {name: "Email", id:4},
        {name: "DOB", id:5}
    ]
    handleInputChange= e => {
        const searchTerm = e.target.value;
        const filteredList = this.state.users.filter(data => {
            let values = Object.values(data).join("").toLowerCase();
            return values.indexOf(searchTerm.toLowerCase())!== -1
        }); 
        this.setState({filteredUsers: filteredList})
    }
    componentDidMount(){API.getEmployee().then(data => this.setState({users:data.data.results, filteredUsers:data.data.results}))}
    render(){
        return (
            <>
            <SearchForm
            handleInputChange={this.handleInputChange}
            />
            <Datatable 
            users={this.state.filteredUsers}
            headings={this.headings}
            />
            </>
        )
    }
}
export default Main;