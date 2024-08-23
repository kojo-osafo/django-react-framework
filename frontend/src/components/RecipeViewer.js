import React, { useState } from 'react';

const RecipeViewer = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // prevent sending empty request
        if (title.trim() === '') {
            setError('Please enter a recipe title.');
            return;
        }

        setError('');
        onSubmit(title);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input
                    type="text"
                    placeholder="Enter Recipe Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ padding: '8px', fontSize: '12px' }}
                />
                <button type="submit" style={{padding: '5px 10px', fontSize: '10px', cursor: 'pointer', color: '#5A9BD3'}}>
                    Find Recipe
                </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default RecipeViewer;
