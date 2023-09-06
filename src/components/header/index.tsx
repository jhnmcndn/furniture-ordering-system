import React, {useState} from 'react'
import styles from './style.module.scss'
import Logo from '../../assets/header/logo.png'
import Cart from '../../assets/header/cart.png'
import Favorites from '../../assets/header/favorites.png'
import Profile from '../../assets/header/profile.png'
import SearchIcon from '../../assets/header/search_icon.png'
import {Link, NavLink} from "react-router-dom";

const Header = () => {
   const [searchItem, setsearchItem] = useState("");
   const handleChange = (event) => {
      setsearchItem(event.target.value);
      console.log('Header searchItem:', searchItem)
   };
   return (<header className={styles.header}>
      <div className={styles.topHeader}>
         <div className={styles.logo}><img src={Logo} alt="Logo"/></div>
         <div className={styles.searchBar}>
            <input type="text" placeholder="Search here..." value={searchItem} onChange={event => handleChange(event)}/>
            <img src={SearchIcon} alt="Search Icon"/>
         </div>
         <div className={styles.headerRight}>
            <div className={styles.cart}>
               <div className={styles.box}><img src={Cart} alt="Cart Icon"/> <p>Cart</p></div>
               <div className={styles.countSize}> 2</div>
            </div>
            <div className={styles.favorites}><img src={Favorites} alt="Favorites Icon"/></div>
            <div className={styles.profile}><img src={Profile} alt="Profile Icon"/></div>
         </div>
      </div>
      <div className={styles.bottomHeader}>
         <div className={styles.leftContent}>
            <div className={styles.categories}>
               <div className={styles.hamburgerMenu}><span/> <span/> <span/></div>
               <p>All Categories</p></div>
            <ul>
               <li><Link to='/' as={NavLink}>Home</Link></li>
               <li><Link to='/shop' as={NavLink}>Shop</Link></li>
               <li><Link to='/product' as={NavLink}>Product</Link></li>
               <li><Link to='/about' as={NavLink}>About</Link></li>
            </ul>
         </div>
         <div className={styles.contact}><p>Contact:</p> <p>(808) 555-0111</p></div>
      </div>
   </header>)
}
export default Header