import React from 'react';
import {logoData} from '../../data/data.js'
import styles from './style.module.scss'

const CompanyLogo = () => {
   return (<section className={styles.companyContainer}>
      <ul> {logoData.map(item => {
         return (<li key={item.id}><img style={{height: `${item.height}rem`, width: `${item.width}`}} src={item.imgSrc}
                                        alt={item.name}/></li>)
      })} </ul>
   </section>);
};
export default CompanyLogo;