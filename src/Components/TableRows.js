import React, { Component } from 'react'

 class TableRows extends Component {
      EditClick = () => {
          this.props.EditFuncUser();
          this.props.ChangeStatus();
      }
      
    render() {
        
        return (
            <tr >
                      <td scope="row">{this.props.stt + 1}</td>
                      <td>{this.props.userName}</td>
                      <td>{this.props.phoneNumber}</td>
                      <td>{this.props.Role}</td>
                      <td>
                          <button className="btn btn-info mr-2"  onClick = {this.EditClick}>Sửa</button>
                          <button className="btn btn-danger" onClick = {(id) => this.props.DeleteUser(id)}>Xóa</button>
                      </td>
            </tr>
        )
    }
}

export default TableRows
