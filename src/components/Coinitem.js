import React from 'react'
import './Coins.css'

const Coinitem = (props) => {
  return (
    <div className='coin-row'>
      <p>{props.coins.market_cap_rank}</p>
      <div className='img-symbol'>
        <img src={props.coins.image} alt='' />
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>
      <p>₹{props.coins.current_price.toLocaleString('en-IN')}</p>
      <p>{props.coins.price_change_percentage_24h.toFixed(2)}</p>
      <p className='hide-mobile'>{(props.coins.total_volume / 1000000).toFixed(0)} M</p>
      <p className='hide-mobile'>{(props.coins.market_cap / 1000000).toFixed(0)} M</p>
    </div>


  )
}

export default Coinitem
