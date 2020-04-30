import React, { Component } from 'react'
import EditUser from './EditUser';
class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            temp:""
        }
    }
     isChange = (event) => {
         event.preventDefault();
         this.setState({
             temp:event.target.value
         })
     }
     
     isShowEditForm = () => {
        
         if(this.props.EditUserStatus === true){
             return (
                 <EditUser ChangeStatus = {() => this.props.ChangeStatus()} objectToEdit = {this.props.objectToEdit}
                     getContentOfEdit  ={(name, phone, role) => this.props.getContentOfEdit(name,phone,role)}
                 />
             )
         }
     }
    render() {
       
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 searchForm">
                      
                        <div className="form-inline">
                            <input type="text" onChange = {(event) => this.isChange(event)} name="search" className="form-control" placeholder="Nhập nội dung tìm kiếm" aria-describedby="helpId" />
                            <button  onClick={(dl) => this.props.GetText(this.state.temp)} className="btn btn-primary ml-2">Tìm kiếm</button>
                        </div>
                        {this.isShowEditForm()}
                    </div>
                    </div>
                    <hr />
            </div>
        )
    }
}

export default Search
