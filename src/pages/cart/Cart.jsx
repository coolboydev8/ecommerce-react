import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { ITEMS } from '../../data/items';
import { Item } from '../shop/Item';
import { CartContainer, Title } from './CartStyles';

export const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className='wrapper cart'>
      <Title>Twój koszyk</Title>
      <CartContainer>
      {ITEMS.map((item) => {
        if (cartItems.hasOwnProperty(item.id) && cartItems[item.id] !== 0 ) {
          return (
            <Item key={item.id} {...item} />
          )
        }
        return null; // Handle case where item is not in cart
        })}
      </CartContainer>
    </div>
  )
}
