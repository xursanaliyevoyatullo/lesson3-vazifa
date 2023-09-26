
function Cards({cardColors, changeBgBody}) {
  return (
    <ul>
        {cardColors.map((color) => {
            return (
              <li onClick={() => changeBgBody(color)} key={color} className="card" style={{background: color}}>{color}</li>
            )
        })}
    </ul>
  )
}

export default Cards