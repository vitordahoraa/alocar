import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Login extends Component{

    render(){
        return(
        <div className="Credential">
            <button id="Login">Login</button>
            <button id="Register">Register</button>
        </div>
        )
    }
}