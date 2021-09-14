import { BsArrowRight } from 'react-icons/bs'
import bookSvg from '../assets/images/books.svg'

import { Link } from 'react-router-dom'

import { Button } from '../components/Button'
import styles from './Home.module.scss'

export const Home = () => {
   return (
      <main>
         <section className={`${styles.hero} section container`}>
            <div className={styles.left}>
               <h1>
                  Lorem, ipsum dolor sit <br /> <span>LF Books</span>{' '}
                  adipisicing elit.
               </h1>
               <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                  cupiditate sint doloremque dicta nostrum? Deserunt officiis
               </p>
               <Link to="/search">
                  <Button
                     color="var(--green)"
                     colorText="var(--text-color-light)"
                  >
                     Pesquisar <BsArrowRight size="1.25rem" />
                  </Button>
               </Link>
            </div>
            <div className={styles.right}>
               <img src={bookSvg} alt="" />
            </div>
         </section>

         <section className={styles.content1}>
            <div className={`container`}>
               <div className={styles.left}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Saepe beatae expedita nemo accusantium neque suscipit impedit
                  quaerat, nobis incidunt architecto deserunt labore mollitia
                  vel praesentium sunt sit ipsa enim explicabo!
               </div>
               <div className={styles.right}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti nihil perspiciatis, consequuntur ad molestias maxime
                  reprehenderit placeat quidem asperiores sapiente maiores
                  corrupti quas soluta? Reprehenderit, officia veniam.
                  Perferendis, earum quae.
               </div>
            </div>
         </section>
      </main>
   )
}
