import React from 'react';
import styles from "./style.module.scss";

const ArrowSwiper = () => {
   return (<div className={styles.arrowSwiper}>
      <div className={styles.leftArrow}/>
      <div className={styles.rightArrow}/>
   </div>);
};
export default ArrowSwiper;