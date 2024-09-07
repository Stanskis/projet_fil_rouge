import CardImage from './image_2.png'
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
export default function ReviewCard() {
    
    return(
        <div className="">
        <div className="card">
          <img src={CardImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make
              up the bulk of the cards content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-body">
            <span className='m-1'><AiOutlineLike /> 33</span>
            <span className='m-1'><AiOutlineDislike />2</span>
            <span className='m-1'><FaRegCommentDots /> 48</span>
            
            
          </div>
        </div>
      </div>
    )
}