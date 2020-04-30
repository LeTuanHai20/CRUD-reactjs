import React, { Component } from 'react'
import Header from './Components/Header'
import Search from './Components/Search'
import Table from './Components/Table'
import Form from './Components/Form'
import DataUser from './Data.json'
import { v4 as uuidv4 } from 'uuid';
class Router extends Component {
  constructor(props) {
    super(props)
    this.state = {
       data:DataUser,
       searchText:"",
       EditUserStatus:false,
       objectToEdit:{}
      }
  }
  GetTextSearch = (dl) =>{
      this.setState({
        searchText:dl
      })
  }
  ChangeEditUserStatus = () => {
    this.setState({
      EditUserStatus:true
    })
  }
    EditUser = (user) => {
      this.setState({
        objectToEdit:user
      })
    }
    deleteUser = (id) => {
      let items =this.state.data.filter(item =>item.id != id);
      this.setState({
        data:items
      })
      localStorage.setItem("data",JSON.stringify(items))
    }
  getContentOfForm  = (name, phone, role) => {
    let item = {};
    item.id = uuidv4();
    item.Name = name;
    item.PhoneNumber  = phone;
    item.Role = role;
    let items = this.state.data;
    items.push(item);
    this.setState({
      data:items
    })
    localStorage.setItem("data",JSON.stringify(items))
  }
  getContentOfEdit  = (name, phone, role) => {
    console.log( name + phone + role)
    if(name !== "" && phone !== "" && role !== ""){
      let items = this.state.data;
      items.forEach(value => {
        if(value.id == this.state.objectToEdit.id)
        {
          value.Name = name;
          value.PhoneNumber  = phone;
          value.Role = role;
        }
      });
      this.setState({
        data:items
      }) 
      localStorage.setItem("data",JSON.stringify(items))
    }
    
  }
  ChangeStatus = () => {
    this.setState({
      EditUserStatus:!this.state.EditUserStatus
    })
  }
  componentWillMount(){
    if( localStorage.getItem("data") === null){
      localStorage.setItem("data",JSON.stringify(DataUser))
    }else{
      let temp = JSON.parse(localStorage.getItem("data"));
      this.setState({
        data:temp
      })
    }
  }
  render() {
       
         var result  = [];
        this.state.data.map((value) => {
          if(value.Name.toUpperCase().indexOf(this.state.searchText.toUpperCase()) > -1){
            result.push(value)
          }
        })
        return (
            <div className="App">
                <Header/>
                <Search GetText = {(dl) =>this.GetTextSearch(dl)}  EditUserStatus = {this.state.EditUserStatus} 
               ChangeStatus = {() => this.ChangeStatus()} objectToEdit = {this.state.objectToEdit}
               getContentOfEdit  ={(name, phone, role) => this.getContentOfEdit(name, phone, role)}
               />
                <div className="container">
                    <div className="row">
                        <Table dataUserProps = {result} 
                        EditFuncUser = {(user) => this.EditUser(user) }
                        ChangeStatus = {() => this.ChangeStatus()}
                        DeleteUser  = {(id) =>{ this. deleteUser(id)}}
                        />
                        <Form addUser = {(name, phone, role) => this.getContentOfForm(name, phone, role)}/>
                    </div>
                </div>
                    
                </div>
            
        )
    }
}

export default Router

