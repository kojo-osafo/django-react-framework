import React from 'react';

const RecipeList = ({ recipes }) => {
    const recipeArray = Array.isArray(recipes) ? recipes : [];

    return (
        <div>
            {recipeArray.length === 0 ? (
                <p>No recipes found. Try searching for another recipe.</p>
            ) : (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {recipeArray.map((recipe) => (
                        <li key={recipe.id} style={{ marginBottom: '20px' }}>
                            <h3>{recipe.title}</h3>
                            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                            <p><strong>Instructions:</strong> {recipe.instructions}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RecipeList;
