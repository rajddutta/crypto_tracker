import React from 'react'
import Coinitem from './Coinitem'
import Coin from '../routes/Coin'
import {Link} from 'react-router-dom'
import './Coins.css'

const Coins = (props) => {
  return (
    <div className='container'>
      <div className='heading'>
      <span></span>
        <span></span>
        <span></span>
        <span></span>
        <p>#</p>
        <p className='coin-name'>Coin</p>
        <p>Price</p>
        <p>24h</p>
        <p className='hide-mobile'>Volume</p>
        <p className='hide-mobile'>Mkt Cap</p>
        
      </div>

      {props.coins.map(coins => {
        return (
          <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
             <Coinitem coins={coins} />
          </Link>
        )
      })}

    </div>
  )
}

export default Coins