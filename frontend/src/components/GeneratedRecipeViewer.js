import React from 'react';

// should receive a json object

const GeneratedRecipeViewer = ({ recipe }) => {
    // should always generate unless user enters something which is not an ingredient
    // API will respond with title = "null"
    if (!recipe.title) {
        return <p>No recipe available. Please try again</p>;
    }

    return (
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '600px', margin: '20px auto', backgroundColor: '#f9f9f9' }}>
            <h3 style={{ margin: '0 0 10px', color: '#333' }}>{recipe.title}</h3>
            <h4 style={{ margin: '0 0 5px', color: '#555' }}>Ingredients:</h4>
            <p style={{ margin: '0 0 15px', color: '#666', whiteSpace: 'pre-line' }}>{recipe.ingredients}</p>
            <h4 style={{ margin: '0 0 5px', color: '#555' }}>Instructions:</h4>
            <p style={{ margin: '0', color: '#666', whiteSpace: 'pre-line' }}>{recipe.instructions}</p>
        </div>
    );
};

export default GeneratedRecipeViewer;
