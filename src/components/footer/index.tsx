import React, {useState} from 'react'
import classnames from 'classnames'
import styles from './style.module.scss'
import Logo from '../../assets/header/logo.png'

const Footer = () => {
   const [activeIndex, setActiveIndex] = useState(0);
   const handleClickTabs = (e, index) => {
      if (index === activeIndex) {
         return;
      }
      setActiveIndex(index);
   }
   const socialMedia = [{
      id: 1,
      name: 'Facebook',
      imgSrcNormal: '/src/assets/footer/facebook-normal.svg',
      imgSrcActive: '/src/assets/footer/facebook-active.svg',
      url: 'facebook.com'
   }, {
      id: 2,
      name: 'Twitter',
      imgSrcNormal: '/src/assets/footer/twitter-normal.svg',
      imgSrcActive: '/src/assets/footer/twitter-active.svg',
      url: 'twitter.com'
   }, {
      id: 3,
      name: 'Instagram',
      imgSrcNormal: '/src/assets/footer/instagram-normal.svg',
      imgSrcActive: '/src/assets/footer/instagram-active.svg',
      url: 'instagram.com'
   }, {
      id: 4,
      name: 'Pinterest',
      imgSrcNormal: '/src/assets/footer/pinterest-normal.svg',
      imgSrcActive: '/src/assets/footer/pinterest-active.svg',
      url: 'pinterest.com'
   }, {
      id: 5,
      name: 'Youtube',
      imgSrcNormal: '/src/assets/footer/youtube-normal.svg',
      imgSrcActive: '/src/assets/footer/youtube-active.svg',
      url: 'youtube.com'
   },]
   const category = [{id: 1, name: 'Sofa', url: ''}, {id: 2, name: 'Armchair', url: ''}, {
      id: 3,
      name: 'Wing Chair',
      url: ''
   }, {id: 4, name: 'Desk Chair', url: ''}, {id: 5, name: 'Wooden Chair', url: ''}, {
      id: 6,
      name: 'Park Bench',
      url: ''
   },]
   const support = [{id: 1, name: 'Help & Support', url: ''}, {id: 2, name: 'Terms & Conditions', url: ''}, {
      id: 3,
      name: 'Privacy Policy',
      url: ''
   }, {id: 4, name: 'Help', url: ''},]
   return (<section className={styles.footerContainer}>
      <div className={styles.topContent}>
         <div className={styles.chairy}><img src={Logo} alt="Logo"/>
            <div className={styles.textChairy}><p>Vivamus tristique odio sit amet velit semper, eu posuere turpis
               interdum.</p> <p>Cras egestas purus</p></div>
            <ul onMouseLeave={() => {
               setActiveIndex(0)
            }}> {socialMedia.map((item, index) => {
               const isActive = index === activeIndex;
               const socialIcon = isActive ? item.imgSrcActive : item.imgSrcNormal;
               return (<li className={classnames({[styles.socialList]: true, [styles.active]: activeIndex === index,})}
                           onClick={() => {
                              console.log(`navigate to ${item.url}`)
                           }} onMouseEnter={(e: React.MouseEvent) => {
                  handleClickTabs(e, index)
               }}><img src={socialIcon} alt={item.name}/></li>)
            })} </ul>
         </div>
         <div className={styles.category}><h2 className={styles.title}>Category</h2>
            <ul className={styles.catSupp}> {category.map(item => {
               return (<li onClick={() => {
               }} key={item.id}>{item.name}</li>)
            })} </ul>
         </div>
         <div className={styles.support}><h2 className={styles.title}>Support</h2>
            <ul className={styles.catSupp}> {support.map(item => {
               return (<li onClick={() => {
               }} key={item.id}>{item.name}</li>)
            })} </ul>
         </div>
         <div className={styles.newsletter}><h2 className={styles.title}>Newsletter</h2>
            <div className={styles.emailInput}><input type="email" placeholder="Your Email"/>
               <button>Subscribe</button>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p></div>
      </div>
      <div className={styles.bottomContent}></div>
   </section>);
};
export default Footer;