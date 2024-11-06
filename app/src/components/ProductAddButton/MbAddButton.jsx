import { useNavigate } from 'react-router-dom';

export default function MbAddButton({componentData }) {
    const navigate = useNavigate();

    const handleAddButton = () => {
        console.log('componentData:', componentData);
        if (!componentData) {
            console.error('No component data available');
            return;
        }

        const { name, price, socket} = componentData;

        // Store the component in localStorage
        localStorage.setItem('selectedMb', JSON.stringify({ name, price, socket }));

        // Navigate to the pc-builder page
        navigate('/pc-builder');
    };

    return (
        <button className="btn btn-primary" onClick={handleAddButton}>
            Add
        </button>
    );
}