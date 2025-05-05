import React from 'react';
import Nav from '../Pages/Nav';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <div className='h-16'>
            <Nav></Nav>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;