import React, {useState, useEffect, useRef} from 'react';
import storeItems from "../../data/items.json"
import ArrowSwiper from '../arrowSwiper'
import StoreItem from '../storeItem'
import styles from './style.module.scss'
import axios from 'axios'

//Import Swiper core and required modules
import {Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react'

//Import Swiper Styles
import 'swiper/css'
import 'swiper/css/navigation'

const RecentlyAdded = () => {
   return (
         <section className={styles.recentlyContainer}>
            <div className={styles.heading}>
               <h2 className={styles.title}>Recently Added</h2>
               <ArrowSwiper/>
            </div>
            <div className={styles.products}>
               <Swiper modules={[Navigation]}
                       spaceBetween={24}
                       slidesPerView={4}
                       pagination={{clickable: true,}}
                       navigation={true}
                       loop={true}
                       className="recentlyAddedSlider">
                  {storeItems.map(item => {
                     return (
                           <SwiperSlide>
                              <StoreItem {...item}/>
                           </SwiperSlide>
                     )
                  })}
               </Swiper>
            </div>
         </section>);
};
export default RecentlyAdded;