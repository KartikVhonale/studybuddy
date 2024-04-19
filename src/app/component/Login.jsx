import React from 'react';
import "@/app/component/css/Login.css";

function Login() {
  return (
    <>
            <div className='bodyone'> 
            <div className ="login1">
                <form className ="form">
                    <p className ="form-title">Login</p>
                    <div className ="input_c">
                        <input type="text" className ="input_c"id="username" placeholder="Username" required/>
                    </div>

                    <div className="input_c">
                        <input type="password" className ="input_c"id="password" placeholder="Password"/>        
                    </div><br/>
                        
                    <input type="button" value="Login" className ="submit" onclick="validateLogin()"/>
                </form>
            </div>
            </div>

    </>
  )
}

export default Login;