import React from 'react'
import { NavLink } from 'react-router-dom'
import KnifeHeart from '../Assets/knife-heart.jpg'

import styles from './NewsBox.module.css'

const NewsBox = () => {
   return (
      <div className={`${styles.box} section`}>
         <div className={styles.image}>
            <img src={KnifeHeart} alt="" />
         </div>
         <div className={styles.description}>
            <h3>Sex World</h3>
            <p>
               A curated selection of adult films comes to Letterboxd, along
               with a new opt-in feature to see associated diary entries and
               reviews. <NavLink to="/news/post/43563456"><span>Read more</span></NavLink>{' '}
            </p>
         </div>
      </div>
   )
}

export default NewsBox
