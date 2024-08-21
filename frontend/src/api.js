import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/';

export const fetchRecipes = async (ingredients) => {
    console.log(ingredients);
    const response = await axios.get(`${API_BASE_URL}recipes/`/*, {
        params: { ingredients },
    }*/);
    console.log(response.data);
    return response.data;
};