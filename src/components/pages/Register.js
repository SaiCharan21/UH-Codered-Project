import React, {useState, useEffect} from 'react';
import '../../App.css';

import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Axios from "axios";
import '../form.css';
import {Button} from "../Button";


function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const reg = () => {
        Axios.post('http://localhost:3002/api/register', {name: name, email: email, password: password}).then(() => {
            alert("Succesfully Registered")
        })
    }
    return (
        <div>
            <h1 className="sign-up">Register</h1>
            <div className="form">
                <u><h2>Enter Details</h2></u>
                <br/>
                <label>Name: </label>
                <br/>
                <input type="text" onChange={(e) => {
                    setName(e.target.value)
                }}/>
                <p></p>
                <label>Email: </label>
                <br/>
                <input type="text" onChange={(e) => {
                    setEmail(e.target.value)
                }}/>
                <p></p>
                <label>Password:</label>
                <br/>
                <input type="text" onChange={(e) => {
                    setPassword(e.target.value)
                }}/>
                <p></p>
                <Button onClick={reg}>Register!</Button>
            </div>


            <Footer/>

        </div>

    )
}

export default Register
