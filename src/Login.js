import React from "react";

function login(){
    return(
        <div>
            <h1>Login</h1>
            <form>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
                </input>
                <br/>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
                </input>
                <br/>
            </form>
        </div>
    )
}

export default login;