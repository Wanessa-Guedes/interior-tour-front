import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { useState } from 'react';
import MainPage from '../Pages/MainPage';
import SignUp from '../Pages/AuthPage/SignUp';
import SignIn from '../Pages/AuthPage/Login';
import UserContext from '../../contexts/UserContext';

function App() {
    const tokenStorageString = localStorage.getItem("user");
    const tokenStorage = JSON.parse(tokenStorageString);
    const [token, setToken] = useState(tokenStorage);
    return (
        <UserContext.Provider value={[token, setToken]}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path="/sign-up" element={<SignUp/>}/>
                    <Route path="/sign-in" element={<SignIn/>}/>
                </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App;