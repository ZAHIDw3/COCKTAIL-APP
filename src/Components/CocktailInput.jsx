
const CocktailInput = () => {
    return (
        <div>
            <input
                placeholder="Write Category cocktail"
                type="text"
            />
            <button
                className="btn btn-primary btn-sm ms-2 mb-1"
                type="button"
            >
                Add
            </button>
            <button
                className="btn btn-danger btn-sm ms-2 mb-1"
                type="button"
            >
                Clean
            </button>
        </div>
    )
}

export default CocktailInput