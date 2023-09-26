import { useState } from "react";
import "./index.css";
import Cards from "./components/Cards";
import { getRandomColors } from "./colors";

function App () {
  const [cardColors,  setCardColors] = useState(getRandomColors)
  const [currentColor, setCurrentColor] = useState('No Selected Color')

  const changeBgBody = (color) => {
    document.body.style.backgroundColor = color 
    setCurrentColor(color)
  }

  function refresh(){
    setCardColors(getRandomColors)
  }

  return (
    <div>
      <h1>{currentColor}</h1>
      <Cards cardColors={cardColors} changeBgBody={changeBgBody}/>
      <button className="button" onClick={() => refresh()} style={{marginTop: 50}}>Refresh</button>
    </div>
  );
}

export default App