import React, { useEffect, useState } from 'react'

const CocktailExpo = ({cocktail = [], setCocktail}) => {
    const [dataList, setDataList] = useState([])

    const getCocktails = async(cocktail) => {
        if (cocktail.length === 0) {
            setDataList([])
            return
        }

        const responsesList = await Promise.all(cocktail.map(async (coc) => {
            const response = await fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${coc}`
            )
            const apiResponse = await response.json()
            console.log(apiResponse)
            return apiResponse.data
        }))
        let cocktailList = []

        responsesList.forEach((data) => {
            console.log(data)
            data.forEach((item) => {
                cocktailList = [...cocktailList, item.drinks.strDrinkThumb]
            })
        })
        setDataList(...cocktailList)
    }

    useEffect(() => {
        getCocktails(cocktail)  
        },
        [cocktail]
    )

  return (
    <div>CocktailExpo</div>
  )
}

export default CocktailExpo
