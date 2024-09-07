import {Link} from 'react-router-dom'

export default function AddButton() {
    
  return (
    <Link to="/products">
      <button className="btn btn-primary text-white">
        +Add Product
      </button>
    </Link>
    
  );
}

