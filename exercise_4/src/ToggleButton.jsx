
import { useState } from "react"

const ToggleButton = () =>{
  const [isOn, setIsOn] = useState(false);
const Toggle = () => setIsOn(!isOn);

    return (
        <>
        
         <p>the button is {isOn ? "ON" : "OFF"}</p>
        <button onClick={Toggle}>{isOn? 'TurnOFF' : 'Turn ON'}</button>
        
        </>
       
    )
}


export default ToggleButton;