import { useState } from "react"
import Cocktails from "./Components"
import CocktailExpo from "./CocktailExpo"

function App() {
  const [cocktail, setCocktail] = useState(["Margarita", "Mojito"])
  return (
    <div className="m-5">
      <h3>COCKTAIL APP</h3>
      <hr />
      <Cocktails
        cocktail={cocktail}
        setCocktail={setCocktail}
      />
      <hr />
      <CocktailExpo
        cocktail={cocktail}
        setCocktail={setCocktail}
      />
    </div>
  )
}

export default App