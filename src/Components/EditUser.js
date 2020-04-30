import React, { Component } from 'react'

 class EditUser extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        name:this.props.objectToEdit.Name,
        phonenumber:this.props.objectToEdit.PhoneNumber,
        role:this.props.objectToEdit.Role
     }
   }
    isClick = () => {
      this.props.ChangeStatus()
      this.props.getContentOfEdit(this.state.name, this.state.phonenumber, this.state.role)
    }
   
     isChange = (event) => {
      let name = event.target.name;
      let value = event.target.value;
      this.setState({
          [name]:value
      })
     
     }
    render() {
        return (
            <div>
                <div className="form-group mt-3">
                <input type="text" name = "name" defaultValue = {this.props.objectToEdit.Name} onChange = {(event) => this.isChange(event)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nhập tên của bạn" />
              </div>
              <div className="form-group">
                <input type="text" name = "phonenumber" defaultValue = {this.props.objectToEdit.PhoneNumber}  onChange = {(event) => this.isChange(event)} className="form-control" id="exampleInputPassword1" placeholder="Nhập số điện thoại" />
              </div>
              <div className="form-group">
              </div>
              <select className="form-control" defaultValue = {this.props.objectToEdit.Role}  name = "role"  onChange = {(event) => this.isChange(event)}  placeholder="Chọn vai trò">
                
                <option value="User">User</option>   
                <option value="Admin">Admin</option>  
              </select>
              <button  className="btn btn-primary btn btn-block mt-3" 
               onClick ={() => {this.isClick()}} 
               
               >Lưu</button>
                  </div>
        )
    }
}

export default EditUser
