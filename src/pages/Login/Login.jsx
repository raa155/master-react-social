import './Login.scss';

const Login = () => {
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>My Social.</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo quisquam quas incidunt harum, perspiciatis numquam recusandae. Nemo doloribus odio voluptatibus et sit eaque? Cumque, asperiores! Voluptas deserunt quas odio laboriosam.</p>
                    <span>Don't have an account?</span>
                    <button>Register</button>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder='Username' />
                        <input type="password" placeholder='Password' />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login