import './Button.css';
import {Link} from 'react-router-dom'

export default function Button() {
    
  return (
    <Link to="/pc-builder">
      <button className="btn btn-info rounded-5 text-white">
        Start Building Your PC Now!
      </button>
    </Link>
    
  );
}

