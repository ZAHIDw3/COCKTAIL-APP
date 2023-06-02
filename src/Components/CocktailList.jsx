import React from 'react'

const CocktailList = ({ cocktail = [], setCocktail }) => {

    const deleteCocktail = (cocktails) => {
        const index = cocktail.indexOf(cocktails);
        if (index !== -1) {
            const newList = [...cocktail];
            newList.splice(index, 1);
            setCocktail(newList);
        }
    }

    return (
        <ol>
            {
                cocktail.map((cocktails, index) => (
                    <li onClick={() => deleteCocktail(cocktails)}
                        key={`${cocktails}-${index}`}
                        style={{ fontWeight: 'bold'}}
                    >
                        {cocktails}
                    </li>
                ))
            }
        </ol>
    )
}

export default CocktailList