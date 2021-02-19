import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">The Wrublik Blog</h1>
            <div className="navbar-links">
                <Link to="/" className="navbar-links-item">
                    Home
                </Link>
                <Link to="/create" className="navbar-links-item">
                    New Blog
                </Link>
            </div>
        </nav>
    );
}
 
export default Navbar;