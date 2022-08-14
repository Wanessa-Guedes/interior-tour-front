import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import MainPage from '../Pages/MainPage';
import SignUp from '../Pages/AuthPage/SignUp';
import SignIn from '../Pages/AuthPage/Login';
import UserContext from '../../contexts/UserContext';
import CityPage from '../Pages/CityPage';
import StatePage from '../Pages/CitiesByStatePage';
import FavoritePage from '../Pages/FavoritesPage';
import Profile from '../Pages/UserProfile';
import AppContainer from './style.jsx';

function App() {
    const tokenStorageString = localStorage.getItem("user")
    const tokenStorage = JSON.parse(tokenStorageString)
    const [user, setUser] = useState(tokenStorage)
    return (
        <UserContext.Provider value={[user, setUser]}><AppContainer>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path="/sign-up" element={<SignUp/>}/>
                    <Route path="/sign-in" element={<SignIn/>}/>
                    <Route path="/city/:id" element={<CityPage/>}/>
                    <Route path="/state/:stateId/cities" element={<StatePage/>}/>
                    <Route path="/favorites" element={<FavoritePage/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>
        </BrowserRouter>
        </AppContainer></UserContext.Provider>
    )
}

export default App;