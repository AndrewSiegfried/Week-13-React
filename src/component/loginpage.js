import React from 'react';

export default class Login extends React.Component {
    render(){
        return ( 
        <div className = 'd'>
            <h3 className= 'h'>Log In</h3>
            <div className='di'>
                <input type='text' placeholder = 'Enter Username'/>
                <input type='password' placeholder='Enter Password'/>
            </div>
        </div>
        )
    }
}