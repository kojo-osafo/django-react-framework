import React, { useState } from 'react';
import RecipeViewer from './components/RecipeViewer';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import GeneratedRecipeViewer from './components/GeneratedRecipeViewer';
import GenerateRecipeForm from './components/GenerateRecipeForm';
import { fetchRecipes, addRecipe, generateAIRecipe } from './api';

const App = () => {
    const [recipes, setRecipes] = useState([]);
    const [AIRecipe, setAIRecipe] = useState({
        title: '',
        ingredients: '',
        instructions: '',
    });

    const handleSearch = async (title) => {
        const data = await fetchRecipes(title);
        setRecipes(data);
    };

    const handleAIQuery = async (ingredients) => {
        const data = await generateAIRecipe(ingredients);
        setAIRecipe(data);
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
            <div>
            <h1>Try Out an AI-Generated Recipe!</h1>
            <GenerateRecipeForm onSubmit={handleAIQuery} />
            <GeneratedRecipeViewer recipe={AIRecipe} />
            </div>
        </div>
    );
};

export default App;