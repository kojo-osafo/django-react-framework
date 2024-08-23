import React, { useState } from 'react';

const AddRecipeForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        title: '',
        ingredients: '',
        instructions: '',
    });

    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // to prevent sending empty requests
        if (!formData.title || !formData.ingredients || !formData.instructions) {
            setError('Please fill out all fields.');
            return;
        }

        setError('');
        await onSubmit(formData);
        setSuccessMessage('Recipe added successfully!');
        setFormData({
            title: '',
            ingredients: '',
            instructions: '',
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input
                    type="text"
                    name="title"
                    placeholder="Recipe Title"
                    value={formData.title}
                    onChange={handleChange}
                    style={{ padding: '8px', fontSize: '12px' }}
                />
                <textarea
                    name="ingredients"
                    placeholder="Ingredients"
                    value={formData.ingredients}
                    onChange={handleChange}
                    style={{ padding: '8px', fontSize: '12px', minHeight: '80px' }}
                />
                <textarea
                    name="instructions"
                    placeholder="Instructions"
                    value={formData.instructions}
                    onChange={handleChange}
                    style={{ padding: '8px', fontSize: '12px', minHeight: '100px' }}
                />
                <button type="submit" style={{padding: '5px 10px', fontSize: '10px', cursor: 'pointer', color: '#5A9BD3' }}>
                    Add Recipe
                </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </div>
    );
};

export default AddRecipeForm;
