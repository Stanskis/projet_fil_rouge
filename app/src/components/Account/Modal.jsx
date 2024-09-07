import './Modal.css'


export default function Modal({ closeModal, children }) {

    
    
    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={closeModal}>&times;</button>
                {children}
            </div>
        </div>
    );
}
