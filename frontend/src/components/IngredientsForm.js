import React, { useState } from 'react';

const IngredientsForm = ({ onSubmit }) => {
    const [ingredients, setIngredients] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(ingredients);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter ingredients, separated by commas"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
            />
            <button type="submit">Search Recipes</button>
        </form>
    );
};

export default IngredientsForm;
