import React from 'react'

const Navbar = ({size,setshow}) => {
  return (
    <div className="navbar">
      <nav>
        <div className="nav_box">
          <span className="my_shop" onClick={()=>setshow(true)}>My shooping</span>
        </div>
        <div className='searchbar'>
          <input class="input" placeholder="Search here">
           </input>
            </div>
        <div class='icon'> <i class="fa fa-cart-arrow-down" onClick={()=>setshow(false)} aria-hidden="true" style={{ float: "right", }}>  {size} </i>
        

        </div>

      </nav>
    </div>
  )
}
export default Navbar