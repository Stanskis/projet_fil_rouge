import { useNavigate } from 'react-router-dom';

export default function GpuAddButton({componentData }) {
    const navigate = useNavigate();

    const handleAddButton = () => {
        console.log('componentData:', componentData);
        if (!componentData) {
            console.error('No component data available');
            return;
        }

        const { name,chipset, price, tdp } = componentData;
        // Store the component in localStorage
        localStorage.setItem('selectedGPU', JSON.stringify({ name, chipset, price, tdp }));

        // Navigate to the pc-builder page
        navigate('/pc-builder');
    };

    return (
        <button className="btn btn-primary" onClick={handleAddButton}>
            Add
        </button>
    );
}