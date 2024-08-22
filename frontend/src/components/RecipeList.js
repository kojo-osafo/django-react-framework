import React from 'react';

const RecipeList = ({ recipes }) => {

    const recipeArray = Array.isArray(recipes) ? recipes : [];

    return (
        <ul>
            {recipeArray.map((recipe) => (
                <li key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <h3>{recipe.ingredients}</h3>
                    <p>{recipe.instructions}</p>
                </li>
            ))}
        </ul>
    );
};

export default RecipeList;