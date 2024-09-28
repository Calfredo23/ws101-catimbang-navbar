import { useEffect } from 'react';
import myImage from './assets/computer.png'; 
import 'animate.css';
import './Home.css'; 
import './AnimatedBackground.css';

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container_home">
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
            <h1 className="title animate__animated animate__bounceInDown animate__delay-1s">"Life is Roblox"</h1>
            <p className="title animate__animated animate__fadeInLeft animate__delay-2s">- DJ Khaled</p>
            <img src={myImage} alt="Computer" className="image animate__animated animate__fadeInUp animate__delay-3s" />
        </div>
    );
}
