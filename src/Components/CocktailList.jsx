import React from 'react'

const CocktailList = ({cocktail = [], setCocktail}) => {

    const deleteCocktail = (cocktails) => {
        const newList =cocktail.filter((coc) => coc!== cocktails)
        setCocktail([...newList])
    }

    return (
        <ol>
            {
                cocktail.map((cocktails) => (
                    <li onClick={() => deleteCocktail(cocktails)} key={cocktails}>
                        {cocktails}
                    </li>
                ))
            }
        </ol>
    )
}

export default CocktailList