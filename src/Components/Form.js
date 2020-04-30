import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             themmoi:false,
             fname:"",
             fphonen:"",
             frole:"User"
        }
    }
    changeState = () => {
        this.setState({
            themmoi:true
        })
    }
    NoChange = () => {
        this.setState({
            themmoi:false
        })
    }
     hide = () => {
         if (!this.state.themmoi) {
             return(
                <button className="btn btn-block btn btn-info mb-3" onClick = {this.changeState}>Thêm mới</button>
             )
         }
     }
    show = () =>{
        if(this.state.themmoi){
            return (
               <div>
                    <button className="btn btn-block btn btn-info mb-2" onClick = {this.NoChange}>Đóng lại</button>
                <div style={{border: '2px solid #63a040', padding: '10px', marginBottom: '30px'}}>
                    <h4  className="mb-3" style={{textAlign: 'center'}}>Thêm mới User</h4>
   
                       
                       <form>
                       <input type="text" onChange = {(event) => this.isChange(event)} placeholder="Nhập tên" className="form-control mb-2" name= "fname"/>
                        <input type="text" onChange = {(event) => this.isChange(event)} placeholder="Nhập số điện thoại" className="form-control mb-2" name= "fphonen"/>
                        <select name="frole" defaultValue="User" onChange = {(event) => this.isChange(event)} className="form-control">
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                        </select>
                        <button  onClick={(name, phone, role) => this.props.addUser(this.state.fname,this.state.fphonen, this.state.frole)} className="btn btn-success" style={{marginTop: '50px', marginLeft: '69px', width: '112px'}}>Thêm </button>
                       
                       </form>
                    
                </div>
               </div>
            )
        }
    }
    isChange = (event) =>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]:value
        })
        
    }
    render() {
        return (
            <div className="col-sm-3">
               {this.hide()}
                {this.show()}
            </div>
        )
    }
}

export default Form
