import React, { useState } from 'react';
import RecipeViewer from './components/RecipeViewer';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import { fetchRecipes, addRecipe } from './api';

const App = () => {
    const [recipes, setRecipes] = useState([]);

    const handleSearch = async (title) => {
        const data = await fetchRecipes(title);
        setRecipes(data);
    };

    return (
        <div>
            <div>
            <h1>Recipe Finder</h1>
            <RecipeViewer onSubmit={handleSearch} />
            <RecipeList recipes={recipes} />
            </div>
            <div>
                <h2>Recipe Submit</h2>
                <AddRecipeForm onSubmit={addRecipe}/>
            </div>
        </div>
    );
};

export default App;