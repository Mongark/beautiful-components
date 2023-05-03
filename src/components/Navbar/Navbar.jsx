import './Navbar.css'

export default function Navbar(props) {
    return(
        <nav className='Navbar'>
            <a href='#' className='NavbarTitle'>
                <h1>
                    <span>Beautiful Components</span>
                </h1>
            </a>

            <div className='NavbarLinks'>
                <a href="/about" className='NavbarLink'>
                    <h4>
                        About me
                    </h4>
                </a>

                <a href="/projects" className='NavbarLink'>
                    <h4>
                        Projects
                    </h4>
                </a>
            </div>
        </nav>
    );
}
