import React from 'react'
import Typed from 'react-typed';
import {FaCoins} from 'react-icons/fa'
import {Link} from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <Link to='/'>
      <div className='navbar'>
        <FaCoins className='icon' />
        <h1>Coin<span className='purple'>
        <Typed
            strings={['INVEST', 'TRACK', 'GROW']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          </span>
        </h1>
      </div>
    </Link>
  )
}

export default Navbar