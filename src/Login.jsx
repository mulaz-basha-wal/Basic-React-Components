function Login() {
    function onLogin() {
        alert("You are logged in");
    }

    return (
        <div className="Login">
            <h1>Login</h1>
            <input type="email" name="email" placeholder="Email"/><br />
            <input type="password" name="pswd" placeholder="Password"/><br />
            <button className="loginButton" onClick={onLogin}>Login In</button>
        </div>
    );
}
export default Login;