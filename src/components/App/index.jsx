import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { useState } from 'react';
import MainPage from '../Pages';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;