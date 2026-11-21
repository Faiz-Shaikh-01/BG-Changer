import { useState } from 'react'
import { useEffect } from 'react';

import './App.css'

function App() {
  const [Bgcolor, setbgcolor] = useState(0);
useEffect(() => {
    document.body.style.backgroundColor = Bgcolor;
}, [Bgcolor]);

  return (
    <>
 
    
    <div id="bar" >
      
      <button class="border" id="red" onClick={()=> setbgcolor("red")}>Red</button>
      <button class="border" id="green" onClick={()=> setbgcolor("green")}>Green</button>
      <button class="border" id="blue" onClick={()=> setbgcolor("blue")} >Blue</button>
      <button class="border" id="olive" onClick={()=> setbgcolor("olive")} >Olive</button>
      <button class="border" id="gray" onClick={()=> setbgcolor("grey")} >Gray</button>
      <button class="border" id="yellow" onClick={()=> setbgcolor("yellow")} >Yellow</button>
      <button class="border" id="pink"onClick={()=> setbgcolor("pink")} >Pink</button>
      <button class="border" id="purple" onClick={()=> setbgcolor("purple")} >Purple</button>
      <button class="border" id="lavender" onClick={()=> setbgcolor("lavender")} >Lavender</button>
      <button class="border" id="white" onClick={()=> setbgcolor("white")} >White</button>
      <button class="border" id="black" onClick={()=> setbgcolor("black")} >Black</button>
    </div>


     </>
  )
}

export default App
