import  { useState, useEffect } from 'react';

const  MouseTracker = () => {
    const [coords, stCoords] = useState({x:0, y:0});

   useEffect(()=>{
   const handleMouseMove = (e) => {
    stCoords({x: e.clientX, y: e.clientY})

   };
   window.addEventListener('mousemove', handleMouseMove);

       return () => {
      window.removeEventListener('mousemove', handleMouseMove);
       };

   },[])


  return (
    <div>
        <p>mouse X:{coords.x}</p>
        <p>mouse Y:{coords.y}</p>
    </div>
  )
}


export default  MouseTracker;