import React from 'react';

// should received a JSON object

const GeneratedRecipeViewer = ({ recipe }) => {

    return (
        <div>
            <h3>{recipe.title}</h3>
            <h4>Ingredients: </h4>
            <p>{recipe.ingredients}</p>
            <h4>Instructions: </h4>
            <p>{recipe.instructions}</p>           
        </div>
    );
};

export default GeneratedRecipeViewer;