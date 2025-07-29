import React, { useState } from 'react'
import Navbar from './Component/Navbar';
import Main from './Component/Main';
import Addcart from './Component/Addcart';
import './Style.css'
const App = () => {
  const [cart, setcart] = useState([]);
  const [show,setshow] = useState(true);
  const handleitem = (item) => {
    let ispresent = false;
    cart.forEach((product) => {
      if (product.id === item.id) ispresent = true;
    });
    if (ispresent) return;
    setcart([...cart, item]);
  };
  return (
    <div>
      <Navbar size={cart.length} setshow={setshow} />
      {
        show? <Main handleitem={handleitem} />: <Addcart cart={cart} setcart={setcart} />
      }  
    </div>
  )
}

export default App;

