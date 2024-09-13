import React from 'react';

export default function AddButton({ productId }) {
    const handleAddButton = () => {
        console.log(`clicked on id: ${productId}`);
    }
    return (
        <button
            className="btn btn-primary"
            onClick={handleAddButton}
        >
            Add
        </button>
    );
}