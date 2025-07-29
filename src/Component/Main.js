import React from 'react'
import list from './MenuApi' 
import Menucard from './Menucard'
const Main = ({handleitem}) => {
  return (
    <div> 
      <section>
         {list.map((item) => {
           return < Menucard item={item} handleitem={handleitem}/>;
         })}
      </section>
     </div>
  )
}

export default Main ;
