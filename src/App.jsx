import './App.css';

import ReactMarkdown from 'react-markdown';

function App() {
    const sample_texts = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ];

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
                <ReactMarkdown>
                    {sample_texts[0]}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default App
