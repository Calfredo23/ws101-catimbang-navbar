import React from 'react';
import './AnimatedBackground.css';
import robloxlogo from './assets/roblox_logo.png';
import './Contact.css';
import { useEffect } from 'react';
import { FaFacebook, FaFacebookMessenger, FaYoutube, FaGamepad } from 'react-icons/fa';

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className="context">
            </div>
            <div className="area">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <img src={robloxlogo} alt="Computer" className="image3 animate__animated animate__rotateIn animate__delay-0.1s" />
            <section className="animate__animated animate__fadeIn animate__delay-0.5s" style={{backgroundColor: 'white', width: '600px', height: '400px',
                borderRadius: '22px', display: 'flex', justifyContent: 'center', alignItems: 'center',
                position: 'absolute', left: '450px', top: '240px'}}>
                <h1 className='contact_title'>Contact Us</h1>
                <p className='contact_p'>If you want to donate some Robux to my poor soul, just enter and click these icons here and you will be redirected to the following links: </p>
                <a href="https://www.facebook.com/profile.php?id=100010574402509" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={30} style={{ margin: '0px 30px', width:'75px', height: 'auto', marginTop: '150px' }} />
                </a>
                <a href="https://www.messenger.com/t/100010574402509" target="_blank" rel="noopener noreferrer">
                    <FaFacebookMessenger size={30} style={{ margin: '0px 30px', width:'75px', height: 'auto', marginTop: '150px' }} />
                </a>
                <a href="https://www.youtube.com/@cedrickalfredo2642" target="_blank" rel="noopener noreferrer">
                    <FaYoutube size={30} style={{ margin: '1px 30px', width:'75px', height: 'auto', marginTop: '150px' }} />
                </a>
                <a href="https://www.roblox.com/users/2935437918/profile" target="_blank" rel="noopener noreferrer">
                    <FaGamepad size={30} style={{ margin: '1px 30px', width:'75px', height: 'auto', marginTop: '150px' }} />
                </a>
            </section>
        </div>
    );
}
