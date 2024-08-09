import './RecipeCard.css';

const RecipeCard = (request) => {
    return (
        <div className="recipeCard">
            <h1>{request.recipe.name}</h1>
            <img src={request.recipe.image} alt={request.recipe.name} />
            <p>{JSON.stringify(request)}</p>
        </div>
    );
}

export default RecipeCard;