import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/';

export const fetchRecipes = async (title) => {
    try {
        const response = await axios.get(`${API_BASE_URL}recipe/view/`, { params: { title: title } });
        //console.log(response.data.recipes);
        return response.data.recipes || [];
    } catch (error) {
        console.error("Error fetching recipes:", error);
        return [];
    }
};

export const addRecipe = async (newRecipe) => {
    try {
        const response = await axios.post(`${API_BASE_URL}recipe/add/`, newRecipe);
        return response.data;
    } catch (error) {
        console.error("Error adding recipe:", error);
        return { error: "Failed to add recipe" };
    }
};