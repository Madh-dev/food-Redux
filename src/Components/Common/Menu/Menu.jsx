import React from 'react'
import './menu.css'
// import { menuItemsData } from './data'
import MenuItems from './MenuItem/MenuItems'

const Menu = ({list}) => {
 
  return (
   <main>
      {list.map((item) =>(
        <MenuItems item={item} key={item.id}/>
      ))}
   </main>
  )
}

export default Menu