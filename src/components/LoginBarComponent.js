import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Login extends Component{

    render(){
        return(
        <div className="Credential">
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        </div>
        )
    }
}