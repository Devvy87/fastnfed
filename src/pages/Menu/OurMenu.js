import React from 'react'
import { MenuList } from '../../helper/MenuList'
import './OurMenu.css'
const OurMenu = () => {
    
  return (
    

    <div className='menu'>
        <h1 className="menuTitle">Our Menu</h1>
        <div className="menuList">
            {MenuList.map((item, key) => {
                return <div className="menuItem">
                    <div>
                        <img src={item.image} alt="smth wrong!"  />
                        <h4>{item.name}</h4>
                        <p>{item.price} $</p>
                        <p className='promo'>{item.promo_price}$</p>
                        <h4>{item.description}</h4>
                        <button className='addToOrder'>Add to Order</button>
                    </div>
                </div>
            })}
        </div>
        </div>
  )
}

export default OurMenu