import React from 'react'
import { Link } from 'react-router-dom'

const Director = props => {
   return (
      <>
         {props.director
            .filter(item => item.job === 'Director')
            .map(director => (
               <span key={director.id}>
                  <Link to={`/../../director/${director.id}`}>{director.name}</Link>
               </span>
            ))}
      </>
   )
}

export default Director
