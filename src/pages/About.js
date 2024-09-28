import robloxabout from './assets/roblox_about.png'; 
import 'animate.css';
import './About.css'; 
import './AnimatedBackground.css';
import { useEffect } from 'react';

export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container_about">
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
            <h1 className="title2 animate__animated animate__bounceInDown animate__delay-1s">What is Roblox?</h1>
            <img src={robloxabout} alt="Computer" className="image2 animate__animated animate__fadeInUp animate__delay-2s" />
            <p className="fein animate__animated animate__fadeInUpBig animate__delay-2s">
                Roblox is an online platform and game creation system that allows users to design, share, and play games created by themselves or others.
                Developed by Roblox Corporation and launched in 2006, it has grown into a popular virtual playground with millions of user-generated games across various genres.
                Players can create their own games using Roblox Studio, a proprietary engine that utilizes the Lua programming language.
                The platform also features a social component, enabling users to make friends, chat, and collaborate on game development.
                Roblox is free to play, but it offers in-game purchases through a virtual currency called Robux.
                This currency can be used to buy items, accessories, and other enhancements for avatars.
                The platform has become especially popular among younger audiences and continues to expand its reach with new features and updates.
            </p>
        </div>
    );
}
