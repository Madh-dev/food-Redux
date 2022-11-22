import React, { forwardRef } from 'react'
import './menu.css'
// import { menuItemsData } from './data'
import MenuItems from './MenuItem/MenuItems'

const Menu = forwardRef(({list},ref) => (
   <main ref={ref}>
      {list.map((item) =>(
        <MenuItems item={item} key={item.id}/>
      ))}
   </main>
  ))

export default Menu