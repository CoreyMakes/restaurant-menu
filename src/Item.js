import React from 'react'

const Item = ({ title, price, img, desc }) => {
  return (
    <div className='item'>
      <img src={img} alt={title} />
      <div className='details'>
        <div className='header-det'>
          <h4 style={{ textTransform: 'capitalize' }}>{title}</h4>
          <h4 className='price'>${price}</h4>
        </div>

        <p className='infos'>{desc}</p>
      </div>
    </div>
  )
}

export default Item
