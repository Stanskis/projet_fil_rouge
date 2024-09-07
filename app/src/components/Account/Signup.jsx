import {useRef, useState} from 'react';
import Modal from './Modal';
import { validateForm } from '../services/RegisterService';
import Account from './model/Account';
import AccData from '../services/AccData';


// /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function SignUp({closeModal}){

    const formRef = useRef(null);
    const [errors, setErrors] = useState({});
    const [formValid, setFormValid] = useState("");
    // const [isLoggedIn, setIsLoggedIn] = useAuth();

    function handleSignUpSubmit(e) {
      e.preventDefault();
      setErrors({}); //reset errors
      setFormValid(""); //reset form valid
      const entries = {
        username: formRef.current.username.value,
        email: formRef.current.email.value,
        password: formRef.current.password.value,
      }

      const validationErrors = validateForm(entries);

        if (Object.keys(validationErrors).length === 0) { //if obj={} empty
            setFormValid("Account created successfully");
            const createdAccount = new Account(entries);
            AccData.addAccount(createdAccount);
            // localStorage.setItem('account', JSON.stringify(createdAccount));
            console.log(createdAccount);
        } else {
            setErrors(validationErrors);
        }
    }

   
    
    return (
      <Modal closeModal={closeModal}>
        <div className="form-container">
          <h3 className="text-white text-center">Sign Up</h3>
          <form ref={formRef} onSubmit={handleSignUpSubmit} noValidate>
            <div className="form-group text-white mt-4">
              <label className='' htmlFor="username">Username:</label>
              <input type="text" id="username" className="form-control" />
              {errors.usernameError && <label className='text-warning'>{errors.usernameError}</label>}
            </div>
            <div className="form-group text-white">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" className="form-control" />
              {errors.emailError && <label className='text-warning'>{errors.emailError}</label>}
            </div>
            <div className="form-group text-white">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" className="form-control" />
              {errors.passwordError && <label className='text-warning'>{errors.passwordError}</label>}
              {formValid && <label className='text-valid'>{formValid}</label>}
            </div>
            
            <button type="submit" className="btn btn_regist mt-3">
              Register
            </button>
            <button
              type="button"
              className="btn btn_cancel mt-3"
              onClick={closeModal}
            >
              Cancel
            </button>
          </form>
        </div>
      </Modal>
    
    ); 
 
}