import React from "react";

const Login = (props) => {
    return (
        <div className="login-container">
            <h1 className="welcome-message">Bienvenido a Votaciones en WEB3</h1>
            <button className="login-button" onClick = {props.connectWallet}>Conectate con Metamask</button>
        </div>
    )
}

export default Login;