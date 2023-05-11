function Navbar() {
    return(
        <nav className='navbar'>
            <div className='logo'>
                <h4>Beautiful Components</h4>
            </div>

            <ul className="navbar-links">

                <div className="navbar-menu">

                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>

                    <li className="navbar-menu-services">
                        <a href="/">Services</a>

                        <ul className="navbar-menu-services-dropdown">
                            <li><a href="/">Work</a></li>
                            <li><a href="/">Work</a></li>
                            <li><a href="/">Work</a></li>
                            <li><a href="/">Work</a></li>
                            <li><a href="/">Work</a></li>
                            <li><a href="/">Work</a></li>
                        </ul>
                    </li>

                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">Contact</a></li>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;
