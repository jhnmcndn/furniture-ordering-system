import React from 'react';
import styles from './style.module.scss'
import ArrowSwiper from "../arrowSwiper";

const TopCategories = () => {
   return (
         <section className={styles.topCategoriesContainer}>
            <div className={styles.heading}>
               <h2 className={styles.title}>Top Categories</h2>
               <ArrowSwiper/>
            </div>
         </section>
   );
};

export default TopCategories;