// import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function ListButton({componentType}) {
    
  const navigate = useNavigate();

  const handleNavigateToProducts = () => {
    const option = componentType === 'CPU' ? '1' : 
                   componentType === 'GPU' ? '2' : 
                   componentType === 'Motherboard' ? '3' : 
                   componentType === 'Power Supply' ? '4' : 
                   componentType === 'Memory' ? '5' : '';
    navigate(`/products?option=${option}`);
  };

  return (
    <button className="btn btn-primary" onClick={handleNavigateToProducts}>
      Add
    </button>
  );
}

