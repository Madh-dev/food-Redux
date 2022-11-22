import React from 'react'
import Banner from '../../Components/Home/Banner/Banner'
import Menu from '../../Components/Common/Menu/Menu'
import Footer from '../../Components/Common/Footer/Footer'
import CartCountbtn from '../../Components/Common/CardCountbtn/CardCountbtn'
import { menuItemsData } from '../../Components/Common/Menu/data'
const Home = () => {
  return (
    <div>
      <Banner />
      <Menu list={menuItemsData}/>
      <Footer />
      <CartCountbtn />
    </div>
  )
}

export default Home