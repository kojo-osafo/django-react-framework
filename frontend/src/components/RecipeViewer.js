import React, { useState } from 'react';

const RecipeViewer = ({ onSubmit }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(title);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter Recipe Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Find Recipe</button>
        </form>
    );
};

export default RecipeViewer;
