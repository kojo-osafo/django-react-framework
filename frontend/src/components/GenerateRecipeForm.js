import React, { useState } from 'react';

const GenerateRecipeForm = ({onSubmit}) => {
    const [formData, setFormData] = useState({
        ingredients: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                name="ingredients"
                placeholder="Optional: Enter Comma-Separated List of Ingredients"
                value={formData.ingredients}
                onChange={handleChange}
            />
            <button type="submit">Surprise Me!</button>
        </form>
    );
};

export default GenerateRecipeForm;