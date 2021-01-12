import React, {useState} from 'react';
import "./Login.css";
import {Link, useHistory} from "react-router-dom";
import {auth} from "./Firebase";

function Login() { 

    const history = useHistory();  //we push the login event to data layer 
    const [email, setEmail] = useState('');      //declaring a variable in react;
    const [password, setPassword] = useState('');       //declaring a variable in react;
    const login = event => {
        event.preventDefault(); //this is prevent the reload of the page
        //do the login logic
        auth.signInWithEmailAndPassword(email,password)
            .then((auth) => {
                // logged in, redirect to homepage..
                history.push('/');  //this will redirect the user to homepage
            })
            .catch(e => alert(e.message));
    }

    const register = event => {
        event.preventDefault(); //this is prevent the reload of the page
        //do the register logic
        auth.createUserWithEmailAndPassword(email,password)
            .then(auth => {
                //created new user and loggen in, redirect to the homepage..
                history.push('/');  //this will redirect the user to homepage
            })
            .catch(e => alert(e.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""                
                />

            </Link>
            <div className="login_container">
                <h1>Sign In</h1>
                <form>
                    <h5> E-mail</h5>
                     <input value = {email} onChange={event => setEmail(event.target.value)} type="email"/>       
                         {/*value = {email} is mapping the value , also onChnge ={event => setEmail(event.target.value) will
                             listen to the event when email or password change and call  the function}*/}
                    <h5> Password</h5>
                    <input value = {password} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button onClick={login} type = "submit" className="login_signInButton">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sale.
                    Please see our Privacy Notice, our Cookies Notice and our interest-Based Ads Notice.
                </p>
                <button onClick={register} className="login_registerButton">Create your Amazon account</button>
            </div>

        </div>
    );
}

export default Login;
