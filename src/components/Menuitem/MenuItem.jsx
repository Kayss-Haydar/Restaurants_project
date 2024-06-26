// eslint-disable-next-line no-unused-vars
import React from 'react';

import './MenuItem.css';


// eslint-disable-next-line react/prop-types
const MenuItem = ({ title, price, tags }) => {
  return (
    <div className='app__menuItem'>
      <div className='app__menuItem-head'>
        <div className='app__menuItem-name'>
          <p className='p__cormorant' style={{ color: "#dcca87" }}>{title}</p>
        </div>


        <div className='app__menuItem-dash' />


        <div className='app__menuItem-price'>
          <p className='p__cormorant'>{price}</p>
        </div>
      </div>
      <div className='app__menuitem-sub'>
        <p className='p__opensans' style={{ color: " #AAA" }}>{tags}</p>
      </div>
    </div>
  )
}

export default MenuItem;
