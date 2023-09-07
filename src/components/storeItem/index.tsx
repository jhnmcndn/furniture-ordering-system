import React, {useState} from 'react';
import {formatCurrency} from "../../utilities/formatCurrency";
import styles from './style.module.scss'
import {Button, Modal} from 'antd'
import ModalAddCart from "../modalAddCart";
import storeItems from "../../data/items.json"

type StoreItemProps = {
   id: number
   name: string
   price: number
   imgUrl: string
   imgUrlModalAddToCart: string
   details: string
}

const StoreItem = ({id, name, price, imgUrl, imgUrlModalAddToCart, details}: StoreItemProps) => {
   return (
         <div className={styles.productsBox} key={id}>
            <img className={styles.productImage} src={imgUrl} alt={name}/>
            <div className={styles.bottom}>
               <div className={styles.info}>
                  <p className={styles.title}>{name}</p>
                  <p className={styles.price}>{formatCurrency(price)}</p>
               </div>
               <ModalAddCart
                     id={id}
                     name={name}
                     price={price}
                     imgurl={imgUrl}
                     imgUrlModalAddToCart={imgUrlModalAddToCart}
                     details={details}/>
            </div>
         </div>
   );
};
export default StoreItem;