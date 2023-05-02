import './App.css';

function App() {
    return (
        <div className='App' >
            <nav className='AppNavbar'>
                <a href='#' className='AppNavbarTitle'>
                    <h1>
                        <span>Beautiful Components</span>
                    </h1>
                </a>

                <div className='AppNavbarLinks'>
                    <a href="/about" className='AppNavbarLink'>
                        <h4>
                            About me
                        </h4>
                    </a>

                    <a href="/projects" className='AppNavbarLink'>
                        <h4>
                            Projects
                        </h4>
                    </a>
                </div>
            </nav>


            <div className='AppPage'>
                <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </h4>

                <h4>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </h4>
            </div>
        </div>
    )
}

export default App
