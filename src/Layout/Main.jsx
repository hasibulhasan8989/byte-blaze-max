import React from 'react';
import Nav from '../Components/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Main = () => {
    return (
        <div>
            <div className='h-16'>
            <Nav></Nav>
            </div>
            <div className='min-h-[calc(100vh-116px)]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;