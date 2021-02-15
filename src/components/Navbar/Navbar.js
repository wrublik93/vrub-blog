import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">The Wrublik Blog</h1>
            <div className="navbar-links">
                <a href="/" className="navbar-links-item">
                    Home
                </a>
                <a href="/create" className="navbar-links-item">
                    New Blog
                </a>
            </div>
        </nav>
    );
}
 
export default Navbar;