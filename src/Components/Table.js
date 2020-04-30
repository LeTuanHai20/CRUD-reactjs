import React, { Component } from 'react'
import TableRows from './TableRows'
class Table extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isSearched:false
        }
    }
   
    MappingData = () => {
       return ( this.props.dataUserProps.map((value, key) =>{
        return( 
        <TableRows key = {key}
        stt = {key} 
        ChangeStatus = {() => this.props.ChangeStatus()}
        EditFuncUser = {(user) =>  this.props.EditFuncUser(value)}
        userName = {value.Name} 
        phoneNumber = {value.PhoneNumber} 
        Role = {value.Role} 
        DeleteUser  = {(id) =>{ this.props.DeleteUser(value.id)}}
        />)
    }))
    }
    render() {
        
        return (
            <div className="col-sm-9">
            <table className="table">
                <thead > 
                    <tr>
                        <th>STT</th>
                        <th>Tên </th>
                        <th>Điện thoại</th>
                        <th>Quyền</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>   
        
                    {this.MappingData()}
                   
                </tbody>
            </table>
          </div>
        )
    }
}

export default Table
