import React from 'react';
import logo from './image/keep.png'
const Header =() =>{
    return (
        <React.Fragment>
        <div className="header">
        <img src={logo} alt="logo" width="70" height="70"></img>
            <h1>Keep</h1>
           
            </div>
        </React.Fragment>
         
            )
}
export default Header