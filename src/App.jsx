import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
    Outlet
} from 'react-router-dom';

function App() {

    return (
        <div className='App' >
            <Navbar />

            <div className='AppBody'>
                <Outlet />
            </div>
        </div>
    )
}

export default App
