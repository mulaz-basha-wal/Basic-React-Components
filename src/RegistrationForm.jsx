function RegistrationForm() {
    function onRegister() {
        alert("Registered Successfully");
    }
    return(
        <div className="registrationFormContainer">
            <h1>Register</h1>
            <input type="text" name="firstName" placeholder="First Name"/><br />
            <input type="text" name="lastName" placeholder="Last Name"/><br />
            <input type="email" name="email" placeholder="Email"/><br />
            <input type="text" name="firstName" placeholder="Username"/><br />
            <input type="number" name="firstName" placeholder="Age"/><br />
            <button onClick={onRegister}>Submit</button>
        </div>
    );
}
export default RegistrationForm;