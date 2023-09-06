import React, {useState} from 'react';
import styles from './style.module.scss'
import {Modal} from "antd";
import {formatCurrency} from "../../utilities/formatCurrency";
import storeItems from "../../data/items.json"
import {useShoppingCart} from "../../context/ShoppingCartContext";

type StoreItemAddCart = {
   id: number
   name: string
   price: number
   imgUrlModalAddToCart: string
   details: string
}

const ModalAddCart = ({id, name, price, imgUrlModalAddToCart, details}: StoreItemAddCart) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
   const quantity = getItemQuantity(id);
   const showModal = () => {
      setIsModalOpen(true);
   }
   const handleOk = () => {
      setIsModalOpen(false);
   }
   const handleCancel = () => {
      setIsModalOpen(false);
   }
   return (<>
      <div className={styles.addToCart} onClick={showModal} key={id}/>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} keyboard={true} centered
             className="fastBuyButton" footer={null}>
         <div className={styles.leftContent}><img src={imgUrlModalAddToCart} alt={name}/></div>
         <div className={styles.rightContent}><h1 className={styles.title}>{name}</h1> <p
               className={styles.details}>{details}</p> <p
               className={styles.price}>Price: <span>{formatCurrency(price)}</span></p>
            <div className={styles.addProduct}>
               <div className={styles.top}>
                  <div className={styles.quantity}>
                     <div className={styles.decrease} onClick={() => decreaseCartQuantity(id)}/>
                     <div className={styles.pieces}>{`${quantity}pc Chimkeen`}</div>
                     <div className={styles.increase} onClick={() => increaseCartQuantity(id)}/>
                  </div>
                  <div className={styles.favorite}/>
               </div>
               <div className={styles.addToCart} onClick={() => increaseCartQuantity(id)}>Add to Cart</div>
            </div>
         </div>
      </Modal> </>);
};
export default ModalAddCart;