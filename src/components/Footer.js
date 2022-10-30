import React, {useState} from 'react';
import './Footer.css';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import Axios from "axios";

function Footer() {
    const [email, setEmail] = useState("");
    const sub = () => {
        Axios.post('http://localhost:3002/api/sub', {email: email}).then(() => {
            alert("Successful Subscribe")
        })
    }
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the E+ newsletter to receive our monthly tech deals
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form>
                        <input placeholder='Your Email' name="email" className='footer-input' type="text"
                               onChange={(e) => {
                                   setEmail(e.target.value)
                               }}/>
                        <Button onClick={sub} buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                    </div>
                    <div class='footer-link-items'>
                        <h2 id="cu">Contact Us</h2>
                        <Link>Chris ~ chrisacts@gmail.com</Link>
                        <Link>Sai ~ tsaicharan03@gmail.com</Link>
                        <Link>Alvaro ~ aaurtaza12@gmail.com</Link>
                        <Link>Leo ~ hahadude999@gmail.com</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;