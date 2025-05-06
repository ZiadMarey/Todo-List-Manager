import { Link } from 'react-router-dom';
import './register.css';
import { useState } from 'react';
import { registerAPICall } from '../../Services/AuthService';

function Register(){
    const [name,setName] = useState('')
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState ('')
    const [password, setPassword] = useState('')

    function handleRegisterationForm(e){
        e.preventDefault();

        const register = {name, username, email, password}

        console.log(register);

        registerAPICall(register).then((response) => {
            console.log(response.data);

        }).catch(error => {
            console.error(error);
        })
    }

    return(
        <div className="body1">
        <div className="bgimage-c"></div>
        <div className="wrapper-a">
        <div className="login-box-a">Register</div>
          <form /*onSubmit={handleLogin}*/>
            <div className="input-box-c">
              <input
                type="text"
                id="firstName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                
              />
              {/* { errors.firstName && <div className='invalid-feedback'> {errors.firstName} </div>} */}
              <label>Name</label>
            </div>
            <div className="input-box-c">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                
              />
              {/* { errors.lastName && <div className='invalid-feedback'> {errors.lastName} </div>} */}
              <label>Username</label>
            </div>

            <div className="input-box-c">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                
              />
              {/* { errors.lastName && <div className='invalid-feedback'> {errors.lastName} </div>} */}
              <label>Email</label>
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
            
            <p className='login-text'> 
                Already have an account? <Link to='/login' className='login-link'>Login</Link> 
            </p> 

            <button
              className="signin-button-a"
              onClick={(e) => handleRegisterationForm(e)}
            >
              Submit
            </button>
            
          </form>
        </div>
      </div>
    );
}

export default Register