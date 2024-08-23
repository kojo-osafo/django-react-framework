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
        <div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <textarea
                    name="ingredients"
                    placeholder="Optional: Enter Comma-Separated List of Ingredients"
                    value={formData.ingredients}
                    onChange={handleChange}
                    style={{ padding: '8px', fontSize: '12px', minHeight: '50px' }}
                />
                <button
                    type="submit" style={{padding: '5px 10px', fontSize: '10px', cursor: 'pointer', color: '#5A9BD3'}}
                >
                    Surprise Me!
                </button>
            </form>
        </div>
    );
};

export default GenerateRecipeForm;