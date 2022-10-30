import React, {useState, useEffect} from 'react';
import '../../App.css';

import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Cards from "../Cards";
import axios from "axios";
import Axios from "axios";
import '../form.css';
import {Button} from "../Button";


function SellProducts() {
    const [userName, setUserName] = useState("");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const submitPost = () => {
        Axios.post('http://localhost:3002/api/create', {userName: userName, title: title, text: text}).then(() => {
            alert("Succesful")
        })
    }
    return (
        <div>
            <h1 className="services">Sell a Product</h1>
            <div className="form">
                <u><h2>Enter Seller Info</h2></u>
                <br/>
                <label>Username: </label>
                <br/>
                <input type="text" onChange={(e) => {
                    setUserName(e.target.value)
                }}/>
                <p></p>
                <label>Title: </label>
                <br/>
                <input type="text" onChange={(e) => {
                    setTitle(e.target.value)
                }}/>
                <p></p>
                <label>Description</label>
                <br/>
                <textarea
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                ></textarea>
                <p></p>
                <Button onClick={submitPost}>List It!</Button>
            </div>


            <Footer/>

        </div>

    )
}

export default SellProducts
