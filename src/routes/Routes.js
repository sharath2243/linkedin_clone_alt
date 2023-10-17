import React from 'react';
import UserRegistration from '../components/Userlogin';
import { Route, Routes } from 'react-router-dom';


function GlobalRoutes() {
    const handleOut = () =>{
        localStorage.removeItem("sesionToken")
    }

    return (
        <Routes>
                <Route path='/' element={<UserRegistration/>} action={handleOut}/>


        </Routes>
     );
}

export default GlobalRoutes;