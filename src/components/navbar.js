import React from 'react';

const NavBar = ({ totalCounters }) => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <p className='navbar-brand' href='#'>
        Counting{' '}
        <span className='badge-pill badge-secondary'>{totalCounters}</span> pcs
      </p>
    </nav>
  );
};

export default NavBar;
