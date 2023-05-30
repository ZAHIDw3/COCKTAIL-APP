import CocktailInput from './CocktailInput'
import CocktailList from './CocktailList'

const Cocktails = ({cocktail = [], setCocktail}) => {
  return (
    <div>
        <CocktailInput
        cocktail={cocktail}
        setCocktail={setCocktail}
        />
        <CocktailList
        cocktail={cocktail}
        setCocktail={setCocktail}
        />
    </div>
  )
}

export default Cocktails