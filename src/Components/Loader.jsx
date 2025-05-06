import React from 'react';
import { PacmanLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div  className='min-h-[calc(100vh-115px)] flex items-center justify-center'>
            <PacmanLoader color='pink'></PacmanLoader>
            
        </div>
    );
};

export default Loader;