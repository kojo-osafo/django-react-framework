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
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
                <div style={{ width: '48%' }}>
                    <h2 style={{ margin: '0 0 10px', color: '#5A9BD3' }}>
                        Recipe Finder
                    </h2>
                    <RecipeViewer onSubmit={handleSearch} />
                    <RecipeList recipes={recipes} />
                </div>
                <div style={{ width: '48%' }}>
                    <h2 style={{ margin: '0 0 10px', color: '#5A9BD3' }}>
                        Recipe Submit
                    </h2>
                    <AddRecipeForm onSubmit={addRecipe} />
                </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                <h2 style={{ margin: '0 0 10px', color: '#5A9BD3' }}>
                    Try Out an AI-Generated Recipe!
                </h2>
                <GenerateRecipeForm onSubmit={handleAIQuery} />
                <GeneratedRecipeViewer recipe={AIRecipe} />
            </div>
        </div>
    );
};

export default App;
