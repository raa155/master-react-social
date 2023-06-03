import './Register.scss';
import React from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div className="register">
        <div className="card">
            <div className="left">
                <h1>My Social.</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo quisquam quas incidunt harum, perspiciatis numquam recusandae. Nemo doloribus odio voluptatibus et sit eaque? Cumque, asperiores! Voluptas deserunt quas odio laboriosam.</p>
                <span>Already have an account?</span>
                <Link to='/login'>
                    <button>Login</button>
                </Link>
            </div>
            <div className="right">
                <h1>Register</h1>
                <form>
                    <input type="text" placeholder='Username' />
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <input type="text" placeholder='Name' />
                    <button>Register</button>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Register
