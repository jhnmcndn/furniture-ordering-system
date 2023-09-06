import React from 'react';
import styles from './style.module.scss'
import Slides from "../slides";
import RightImage from '../../assets/home/banner/banner_img.png'
import discountIcon from '../../assets/home/banner/discount.png'
import deliveryIcon from '../../assets/home/banner/delivery.png'
import supportIcon from '../../assets/home/banner/support.png'
import paymentIcon from '../../assets/home/banner/payment.png'

// Import Swiper core and required modules
import {Autoplay, Navigation, Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'

// Import Swiper Styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Banner = () => {
   const slideData = [{
      id: 1,
      subHeader: 'Welcome to chairy',
      header: 'Best Furniture Collection for your interior.',
      button: 'Shop Now',
      image: RightImage
   }, {
      id: 2,
      subHeader: 'Huge Discount',
      header: '54% off for the first five customers',
      button: 'Register Now',
      image: RightImage
   }, {
      id: 3,
      subHeader: 'Free delivery',
      header: 'Get a free delivery on every 5 purchase you get',
      button: 'Shop Now',
      image: RightImage
   }]
   const featuresData = [{id: 1, image: discountIcon, title: 'Discount', subTitle: 'Every week new sales'}, {
      id: 2,
      image: deliveryIcon,
      title: 'Free Delivery',
      subTitle: '100% Free for all orders'
   }, {id: 3, image: supportIcon, title: 'Great Support 24/7', subTitle: 'We care your experiences'}, {
      id: 4,
      image: paymentIcon,
      title: 'Secure Payment',
      subTitle: '100% Secure Payment Method'
   }]
   return (<section className={styles.bannerContainer}>
      <div className={styles.banner}>
         <div className={styles.bgFigure}/>
         <Swiper slidesPerView={1} modules={[Autoplay, Navigation, Pagination]} navigation={true}
                 autoplay={{delay: 2500, disableOnInteraction: false,}} loop={true} pagination={{clickable: true}}
                 className="bannerSwiper"> {slideData.map(item => {
            return (<SwiperSlide key={item.id}> <Slides subHeader={item.subHeader} header={item.header}
                                                        buttonLabel={item.button} image={item.image}/> </SwiperSlide>)
         })} </Swiper></div>
      <div className={styles.feature}>
         <ul> {featuresData.map(item => {
            return (<li key={item.id}>
               <div className={styles.featuresLogo}><img src={item.image} alt="Features Logo"/></div>
               <div className={styles.details}>
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.subTitle}>{item.subTitle}</div>
               </div>
            </li>)
         })} </ul>
      </div>
   </section>);
};
export default Banner;


