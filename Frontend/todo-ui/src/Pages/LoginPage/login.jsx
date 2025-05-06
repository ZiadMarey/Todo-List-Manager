import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import { useState } from 'react'
import { loginAPICall, saveLoggedInUser, storeToken } from '../../Services/AuthService'

function Login (){
    const[username,setUsername] = useState('')
    const[password,setPassword] = useState('')
    
    const navigator = useNavigate();

function handleLoginForm(e){
        e.preventDefault();

        loginAPICall(username,password).then((response) => {
            console.log(response.data);

            // const token = 'Basic ' + window.btoa(username + ":" + password);
            const token = 'Bearer ' + response.data.accessToken
            storeToken(token);

            saveLoggedInUser(username);
            navigator("/todos")

        }).catch(error => {
            console.error(error);
        })
    }

    return(
        <div className="body1">
        <div className="bgimage-c"></div>
        <div className="wrapper-c">
        <div className="login-box-c">Login</div>
          <form /*onSubmit={handleLogin}*/>
            
            <div className="input-box-c">
              <input
                type="text"
                value= {username}
                onChange={(e) => setUsername(e.target.value)}
                required
                
              />
              {/* { errors.lastName && <div className='invalid-feedback'> {errors.lastName} </div>} */}
              <label>Username or Email</label>
            </div>

            <div className="input-box-c">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                
              />
              {/* { errors.lastName && <div className='invalid-feedback'> {errors.lastName} </div>} */}
              <label>Password</label>
            </div>
            
            <p className='register-text'> 
                Already have an account? <Link to='/register' className='register-link'>Sign Up</Link> 
            </p> 

            <button
              className="signin-button-c"
              onClick={(e) => handleLoginForm(e)}
            >
              Submit
            </button>
            
          </form>
        </div>
      </div>
    )
}

export default Login