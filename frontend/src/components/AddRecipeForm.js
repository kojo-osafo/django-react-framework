import React, { useState } from 'react';

const AddRecipeForm = ({onSubmit}) => {
    const [formData, setFormData] = useState({
        title: '',
        ingredients: '',
        instructions: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Recipe Title"
                value={formData.title}
                onChange={handleChange}
            />
            <textarea
                name="ingredients"
                placeholder="Ingredients"
                value={formData.ingredients}
                onChange={handleChange}
            />
            <textarea
                name="instructions"
                placeholder="Instructions"
                value={formData.instructions}
                onChange={handleChange}
            />
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default AddRecipeForm;