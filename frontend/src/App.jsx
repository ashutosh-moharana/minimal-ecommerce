import { useState } from 'react'
import PaymentButton from './handlePayment';
import Home from '../pages/Home';

function App() {
  const [count, setCount] = useState(0);


  return (
   <div className="">
    <Home />
   </div>
  )
}

export default App
