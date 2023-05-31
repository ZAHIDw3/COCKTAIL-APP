import { useState } from "react"
import Cocktails from "./Components"
import CocktailExpo from "./CocktailExpo"

function App() {
  const [cocktail, setCocktail] = useState(["Zombie"])
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
      {
        cocktail.length === 0 && (
          <div className="text-center">
            <h3>Your list is empty</h3>
            Add a new cocktail to get started.
          </div>
        )
      }
      
      {
        cocktail.length >= 2 && (
          <div >
            <hr />
            <Cocktails
              cocktail={cocktail}
              setCocktail={setCocktail}
            />
          </div>
        )
      }

    </div>
  )
}

export default App