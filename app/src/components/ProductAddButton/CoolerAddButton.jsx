import { useNavigate } from 'react-router-dom';

export default function CoolerAddButton({componentData }) {
    const navigate = useNavigate();

    const handleAddButton = () => {
        console.log('componentData:', componentData);
        if (!componentData) {
            console.error('No component data available');
            return;
        }

        const { name, price} = componentData;
        // Store the component in localStorage
        localStorage.setItem('selectedCooler', JSON.stringify({ name, price}));

        // Navigate to the pc-builder page
        navigate('/pc-builder');
    };

    return (
        <button className="btn btn-primary" onClick={handleAddButton}>
            Add
        </button>
    );
}