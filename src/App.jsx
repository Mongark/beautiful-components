import Navbar from './components/Navbar';
import {
    Outlet
} from 'react-router-dom';

function App() {

    return (
        <div className='app' >
            <Navbar />

            <div className='app-body'>
                <Outlet />
            </div>
        </div>
    )
}

export default App
