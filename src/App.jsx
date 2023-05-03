import './App.css';
import Navbar from './components/Navbar/Navbar';

import ReactMarkdown from 'react-markdown';

function App() {
    const sample_texts = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ];

    return (
        <div className='App' >
            <Navbar />

            <div className='AppBody'>
                <ReactMarkdown>
                    {sample_texts[0]}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default App
