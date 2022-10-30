import React, {useState} from 'react';
import './Footer.css';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import Axios from "axios";

function Footer() {
    const [email, setEmail] = useState("");
    const sub = () => {
        Axios.post('http://localhost:3002/api/sub', {email: email}).then(() => {
            alert("Successfully Subscribed to the Newsletter!!")
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
                        <h2 id="cu">Contact Us</h2>
                        <Link>Chris ~ chrisisaac@gmail.com</Link>
                        <Link>Sai ~ tsaicharan03@gmail.com</Link>
                        <Link>Alvaro ~ aaurtaza12@gmail.com</Link>
                        <Link>Leo ~ hahadude999@gmail.com</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2 id="sm">Social Media</h2>
                        <Link>Chris ~ https://www.linkedin.com/in/chris-its-uh</Link>
                        <Link>Sai ~ https://www.linkedin.com/in/sai-todupunoori/</Link>
                        <Link>Alvaro ~ https://www.linkedin.com/alvaro-urtaza</Link>
                        <Link>Leo ~ www.linkedin.com/in/leonardo-rodriguez34</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;