import React, { useRef } from 'react'
import Banner from '../../Components/Home/Banner/Banner'
import Menu from '../../Components/Common/Menu/Menu'
import Footer from '../../Components/Common/Footer/Footer'
import CartCountbtn from '../../Components/Common/CardCountbtn/CardCountbtn'
import { menuItemsData } from '../../Components/Common/Menu/data'
const Home = () => {

const menuRef = useRef();

const handleScrollMenu = () =>{
  menuRef.current.scrollIntoView({behavior: 'smooth'});
}

  return (
    <div>
      <Banner  handleScrollMenu= {handleScrollMenu} />
      <Menu list={menuItemsData} ref={menuRef} />
      <Footer />
      <CartCountbtn />
    </div>
  )
}

export default Home