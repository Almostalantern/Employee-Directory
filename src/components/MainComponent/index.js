import React,{Component} from "react";
import API from "../../utils/API"
import Datatable from "../DataTable"




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
    componentDidMount(){API.getEmployee().then(data => this.setState({users:data.data.results, filteredUsers:data.data.results}))}
    render(){
        return (
            <>
            <Datatable 
            users={this.state.users}
            headings={this.headings}
            />
            </>
        )
    }
}
export default Main;