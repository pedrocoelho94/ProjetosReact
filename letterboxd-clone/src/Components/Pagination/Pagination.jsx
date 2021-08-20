import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import styles from './Pagination.module.css'

const Pagination = ({ totalPages, currentPage = 1 }) => {
   const MAX_ITEMS = 7
   const MAX_LEFT = currentPage < totalPages ? (MAX_ITEMS - 1) / 2 : totalPages

   function handleClick() {
      window.scrollTo(0, 0)
   }

   const first = Math.max(currentPage - MAX_LEFT, 1)

   return (
      <ul className={styles.pagination}>
         <li>
            {currentPage >= 2 ? (
               <Link
                  onClick={handleClick}
                  className={styles.item}
                  to={`../${currentPage - 1}`}
               >
                  Anterior
               </Link>
            ) : (
               ''
            )}
         </li>

         {Array.from({ length: Math.min(MAX_ITEMS, totalPages) })
            // .map((_, index) => index + first)
            .map((item, index) => index + first <= totalPages ? item = index + first : '')
            .map(page => (
               <li onClick={handleClick} key={page}>
                  <NavLink
                     activeClassName={styles.active}
                     className={styles.item}
                     to={`../${page}`}
                  >
                     {page}
                  </NavLink>
               </li>
            ))}

         {/* <li>
            <NavLink
               activeClassName={styles.active}
               className={styles.item}
               to={`../${totalPages}`}
            >
               {totalPages}
            </NavLink>
         </li> */}

         <li>
            {currentPage < totalPages ? (
               <Link
                  onClick={handleClick}
                  className={styles.item}
                  to={`../${Number(currentPage) + 1}`}
               >
                  Próximo
               </Link>
            ) : (
               ''
            )}
         </li>
      </ul>
   )
}

export default Pagination
