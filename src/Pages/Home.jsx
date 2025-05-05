import React from 'react';
import Hero from '../Components/Hero';
import wave from '../assets/wave.svg'

const Home = () => {
    return (
        <div className='min-h-[calc(100vh-116px)] flex flex-col justify-center items-center  relative'>
           <Hero></Hero>
           <img className='absolute bottom-0 w-full' src={wave} alt=""  />
           
        </div>
    );
};

export default Home;