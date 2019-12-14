import React, { Component } from 'react';

class Login extends Component {
    render () {
        return (
            <div className="container">
                <form className="formStye">
                    <div className="input-field">
                        <input type="email" id ="email" onChange={}/>
                    </div>

                    <div className="input-field">
                        <input type="password" id ="password" onChange={}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;