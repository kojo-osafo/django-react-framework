import React from 'react';

const RecipeList = ({ recipes }) => {
    return (
        <ul>
            {recipes.map((recipe) => (
                <li key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.ingredients}</p>
                    <p>{recipe.instructions}</p>
                </li>
            ))}
        </ul>
    );
};

export default RecipeList;