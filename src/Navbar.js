import { Link, useMatch, useResolvedPath } from "react-router-dom";
import './Navbar.css';
import logo from './pages/assets/logo.png';


export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/home" className="site-title">
                <img src={logo} alt="Calfredo Logo" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                Calfredo
            </Link>
            <ul>
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/contact">Contact Us</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}

