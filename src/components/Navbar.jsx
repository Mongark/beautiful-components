function Navbar() {
    return(
        <nav className='navbar'>
            <a href='#' className='navbar-title'>
                <h1>
                    <span>Beautiful Components</span>
                </h1>
            </a>

            <div className='navbar-link-container'>
                <a href="/about" className='navbar-link'>
                    <h4>
                        About me
                    </h4>
                </a>

                <a href="/projects" className='navbar-link'>
                    <h4>
                        Projects
                    </h4>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
