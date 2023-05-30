import { useState } from "react"
import Cocktails from "./Components"

function App() {
  const [cocktail, setCocktail] = useState(["Margarita"])
  return (
    <div className="m-5">
      <h3>COKTAIL APP</h3>
      <hr />
      <Cocktails
      cocktail={cocktail}
      setCocktail={setCocktail}
      />
      <hr />
    </div>
  )
}

export default App