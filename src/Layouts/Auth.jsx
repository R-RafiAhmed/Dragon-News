import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';

const Auth = () => {
    return (
        <div className='bg-gray-100'>
            <div className='container mx-auto'>
                <header className='py-12'>
                    <NavBar></NavBar>
                </header>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Auth;