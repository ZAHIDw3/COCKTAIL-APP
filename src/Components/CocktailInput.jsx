import { useState } from "react"

const CocktailInput = ({ cocktail = [], setCocktail }) => {
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const handleAddCocktailButton = () => {
        setCocktail([inputValue, ...cocktail])
        setInputValue("")
    }

    const handleClearList = () => {
        setCocktail([])
    }

    return (
        <div>
            <input
                onChange={(e) => handleInputChange(e)}
                placeholder="Write Category cocktail"
                type="text"
                value={inputValue}
            />
            <button
                onClick={(e) => handleAddCocktailButton(e)}
                className="btn btn-primary btn-sm ms-2 mb-1"
                type="button"
            >
                Add
            </button>
            <button
                onClick={(e) => handleClearList(e)}
                className="btn btn-danger btn-sm ms-2 mb-1"
                type="button"
            >
                Clean
            </button>
        </div>
    )
}

export default CocktailInput