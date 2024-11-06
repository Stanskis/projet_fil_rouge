import { useNavigate } from 'react-router-dom';

export default function PsuAddButton({componentData }) {
    const navigate = useNavigate();

    const handleAddButton = () => {
        console.log('componentData:', componentData);
        if (!componentData) {
            console.error('No component data available');
            return;
        }

        const { name, price, wattage} = componentData;
        // Store the component in localStorage
        localStorage.setItem('selectedPsu', JSON.stringify({ name, price, wattage }));

        // Navigate to the pc-builder page
        navigate('/pc-builder');
    };

    return (
        <button className="btn btn-primary" onClick={handleAddButton}>
            Add
        </button>
    );
}