import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="navbar bg-base-100 shadow-lg px-2 md:px-8 fixed">
     <div className="flex-1">
       <a className="btn btn-ghost text-2xl gap-0 normal-case text-secondary">Byte<span className='text-primary'>Blaze</span></a>
  </div>
  <div className="flex gap-4 items-center">
    <ul className="menu menu-horizontal px-1 gap-6">
      <NavLink to={'/'} className={({isActive})=>isActive?'text-primary font-bold':'font-bold'} >Home</NavLink>
      <NavLink to={'/blogs'} className={({isActive})=>isActive?'text-primary font-bold':'font-bold'} >Blogs</NavLink>
      <NavLink to={'/bookmarks'} className={({isActive})=>isActive?'text-primary font-bold':'font-bold'} >Bookmarks</NavLink>

      
      
      
    </ul>
     <label className="toggle text-base-content ">
     <input type="checkbox" value="synthwave" className="theme-controller" />

     <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

     <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

    </label>
  </div>
</div>
    );
};

export default Nav;