import { useState } from "react"

const CocktailInput = ({ cocktail = [], setCocktail }) => {
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const handleAddCocktailButton = () => {
        if (inputValue.trim() !== "") {
            setCocktail([inputValue, ...cocktail])
            setInputValue("")
        }
    }

    const handleClearList = () => {
        setCocktail([])
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
          handleAddCocktailButton();
        }
      };

    return (
        <div>
            <input
                onChange={(e) => handleInputChange(e)}
                onKeyPress={handleKeyPress}
                placeholder="Write a cocktail"
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