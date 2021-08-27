import React from 'react'
import { Link } from 'react-router-dom'
import styles from './DropdownMenu.module.css'

const DropdownMenu = (props) => {
   console.log(props)
   return (
      <div className={styles.dropdown}>
         {console.log(props.castCount)}
            <button className={styles.dropbtn}>{props.job}</button>
            <div className={styles.dropdownContent}>
               {props.castCount > 0 && (
                  <Link to={`/../../actor/${props.id}`}>Atuação - {props.castCount}</Link>
               )}
               {props.directorCount > 0 && (
                  <Link to={`/../../director/${props.id}`}>
                     Direção - {props.directorCount}
                  </Link>
               )}
               {props.writerCount > 0 && (
                  <Link to={`/../../writer/${props.id}`}>
                     Roteiro - {props.writerCount}
                  </Link>
               )}
               {props.producerCount > 0 && (
                  <Link to={`/../../producer/${props.id}`}>
                     {' '}
                     Produção - {props.producerCount}
                  </Link>
               )}
            </div>
         </div>
   )
}

export default DropdownMenu
