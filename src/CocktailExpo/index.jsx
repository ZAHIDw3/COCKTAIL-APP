import React, { useEffect, useState } from 'react'

const CocktailExpo = ({ cocktail = [], setCocktail }) => {
    const [dataList, setDataList] = useState([])

    const getCocktails = async (cocktail) => {
        if (cocktail.length === 0) {
            setDataList([])
            return
        }

        const responsesList = await Promise.all(cocktail.map(async (coc) => {
            const response = await fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${coc}`
            )
            const apiResponse = await response.json()
            return apiResponse.drinks
        }))
        let cocktailList = []

        responsesList.forEach((data) => {
            data.forEach((item) => {

                let ingredients = []
                for (let i = 1; i <= 15; i++) {
                    const ingredient = item[`strIngredient${i}`];
                    if (ingredient) {
                        ingredients.push(ingredient);
                    } else {
                        break;
                    }
                }

                cocktailList = [...cocktailList,
                {
                    url: item.strDrinkThumb,
                    name: item.strDrink,
                    instructions: item.strInstructions,
                    ingredients: ingredients
                }
                ]
            })
        })
        setDataList([...cocktailList])
    }

    useEffect(() => {
        getCocktails(cocktail)
    },
        [cocktail]
    )

    return (
        <div className="container-fluid">
            <div className="row">
                {dataList.map((data) => (
                    <div className="col-md-4 mb-4" key={data.url}>
                        <div className="card h-100">
                            <img
                                src={data.url}
                                className="card-img-top"
                                alt={data.name}
                                style={{ height: '250px' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title text-center">
                                    <strong>{data.name}</strong>
                                </h5>
                                <h6 className="card-subtitle mb-2">
                                    <strong>Ingredients:</strong>
                                </h6>
                                <ul className="card-text" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                                    {data.ingredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))}
                                </ul>
                                <h6 className="card-subtitle mb-2">
                                    <strong>Instructions:</strong>
                                </h6>
                                <p className="card-text" style={{ textAlign: 'justify' }}>
                                    {data.instructions}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CocktailExpo
