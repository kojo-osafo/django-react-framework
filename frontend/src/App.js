import React, { useState } from 'react';
import IngredientForm from './components/IngredientsForm';
import RecipeList from './components/RecipeList';
import { fetchRecipes } from './api';

const App = () => {
    const [recipes, setRecipes] = useState([]);

    const handleSearch = async (ingredients) => {
        const data = await fetchRecipes(ingredients);
        setRecipes(data);
    };

    return (
        <div>
            <h1>Recipe Finder</h1>
            <IngredientForm onSubmit={handleSearch} />
            <RecipeList recipes={recipes} />
        </div>
    );
};

export default App;