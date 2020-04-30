import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div className="Header"> 
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-3" style={{textAlign: 'center'}}>Quản lý thư viện bằng ReactJS</h1>
                        <p className="lead " style={{textAlign: 'center'}} >với dữ liệu JSON</p>
                        <hr className="my-2" />
                    </div> 
                </div>
            </div>
        )
    }
}

export default Header
