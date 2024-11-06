import { useNavigate } from 'react-router-dom';

export default function CpuAddButton({componentData }) {
    const navigate = useNavigate();

    const handleAddButton = () => {
        console.log('componentData:', componentData);
        if (!componentData) {
            console.error('No component data available');
            return;
        }

        const { name, price, tdp } = componentData;
        // Store the component in localStorage
        localStorage.setItem('selectedCPU', JSON.stringify({ name, price, tdp }));

        // Navigate to the pc-builder page
        navigate('/pc-builder');
    };

    return (
        <button className="btn btn-primary" onClick={handleAddButton}>
            Add
        </button>
    );
}