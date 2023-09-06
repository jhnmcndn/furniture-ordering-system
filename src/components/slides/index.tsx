import React from 'react';
import styles from './style.module.scss'
import ArrowButton from '../../assets/home/banner/arrow_button.png'

const Slides = ({subHeader, header, buttonLabel, image}) => {
   return (<div className={styles.slidesContainer}>
      <div className={styles.leftContent}><p>{subHeader}</p> <h1>{header}</h1> <span
            className={styles.button}> <p>{buttonLabel}</p> <img src={ArrowButton} alt="Arrow Button"/> </span></div>
      <div className={styles.rightContent}><img src={image} alt="IDK"/></div>
   </div>);
};
export default Slides;