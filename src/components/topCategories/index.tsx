import React, { useState, useEffect, useRef } from 'react';
import { filterProductsByCategories } from "../../utilities/filterProductsByCategories";
import storeItems from "../../data/items.json"
import styles from './style.module.scss'
import ArrowSwiper from "../arrowSwiper";

//Import Swiper core and required modules
import {Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react'

//Import Swiper Styles
import 'swiper/css'

const filterCategories = (products, category) => {
   const filterProduct = products.filter((product) => product.category === category)
   return filterProduct.length;
}


const categories = [
   {
      id: 1,
      name: 'Sofa Chair',
      quantity: filterCategories(storeItems, "Sofa Chair"),
      image: "src/assets/home/categories/sofa-chair.png"
   },
   {
      id: 2,
      name: 'Wing Chair',
      quantity: filterCategories(storeItems, "Wing Chair"),
      image: "src/assets/home/categories/wing-chair.png"
   },
   {
      id: 3,
      name: 'Wooden Chair',
      quantity: filterCategories(storeItems, "Wooden Chair"),
      image: "src/assets/home/categories/wooden-chair.png"
   },
   {
      id: 4,
      name: 'Desk Chair',
      quantity: filterCategories(storeItems, "Desk Chair"),
      image: "src/assets/home/categories/desk-chair.png"
   },
   {
      id: 5,
      name: 'Park Bench',
      quantity: filterCategories(storeItems, "Park Bench"),
      image: "src/assets/home/categories/park-bench.png"
   },
]


const TopCategories = () => {
   const swiperRef = useRef(null);

   const handleNavigationClick = (direction) => {
      if (swiperRef.current) {
         if (direction === 'prev') {
            swiperRef.current.swiper.slidePrev();
         } else if (direction === 'next') {
            swiperRef.current.swiper.slideNext();
         }
      }
   }

   return (
         <section className={styles.topCategoriesContainer}>
            <div className={styles.heading}>
               <h2 className={styles.title}>Top Categories</h2>
               {/*<ArrowSwiper/>*/}
               <div className={styles.arrowSwiper}>
                  <div className={styles.leftArrow} onClick={() => handleNavigationClick('prev')}/>
                  <div className={styles.rightArrow} onClick={() => handleNavigationClick('next')}/>
               </div>
            </div>
            <div className={styles.categoriesContainer}>
               <Swiper
                     spaceBetween={24}
                     slidesPerView={3}
                     navigation={true}
                     loop={true}
                     className="topCategoriesSlider"
                     initialSlide={1}
                     ref={swiperRef}
               >
                  {categories.map((item, index) => {
                     return (
                           <SwiperSlide>
                              <div className={styles.categoryBox}
                                   style={{
                                      background: `url(${item.image}) no-repeat`,
                                      backgroundSize: '100% 100%'
                                   }}
                                   onClick={() => filterProductsByCategories(storeItems, item.name)}
                              >
                                 <div className={styles.categoryDetails}>
                                    <h3 className={styles.title}>{item.name}</h3>
                                    <p className={styles.quantity}>{`${item.quantity} Products`}</p>
                                 </div>
                              </div>
                           </SwiperSlide>
                     )
                  })}
               </Swiper>
            </div>
         </section>
   );
};

export default TopCategories;