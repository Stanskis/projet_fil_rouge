import {useRef, useState} from 'react';
import Modal from './Modal';
import { validateForm } from '../services/RegisterService';
import Account from './model/Account';
import AccData from '../services/AccData';
import SignUp from './Signup';

export default function LogIn({closeModal}){

    const formRef = useRef(null);
    const [errors, setErrors] = useState({});
    const [formValid, setFormValid] = useState("");

    function handleLogInSubmit(e) {
      e.preventDefault();
      setErrors({});
      setFormValid("");
      const entries = {
        username: formRef.current.username.value,
        password: formRef.current.password.value,
      };


      const accounts = AccData.getAllAccounts();
      // console.log(accounts);

      const storedAccount = accounts.find((account) =>
        account._username.includes(entries.username)
      );

      // console.log(storedAccount);

      if (storedAccount) {
        if (entries.password === storedAccount._password) {
          alert(`Welcome ${storedAccount._username}! `);
          closeModal();
        } else {
          setErrors({ passwordError: "Password is incorrect" });
        }
      }else {
        setErrors({ passwordError: "Password is incorrect" });
      }
    }

      
  
    

   
    
    return (
      <Modal closeModal={closeModal}>
        <div className="form-container">
          <h3 className="text-white text-center">Log In</h3>
          <form ref={formRef} noValidate>
            <div className="form-group text-white mt-4">
              <label className='' htmlFor="username">Username:</label>
              <input type="text" id="username" className="form-control" />
            </div>
            <div className="form-group text-white">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" className="form-control" />
              {errors.passwordError && <label className='text-warning'>{errors.passwordError}</label>}
            </div>
            <div className="form-group"><a href='#' className='text-white text-decoration-none'>Forgot password?</a></div>
            <button type="submit" className="btn btn-success mt-3" onClick={handleLogInSubmit}>
              Login
            </button>
            <button
              type="button"
              className="btn btn-danger mt-3 mx-1"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-danger mt-3 mx-5"
              onClick={closeModal}
            >
              Sign Up
            </button>
          </form>
        </div>
      </Modal>
    
    ); 
 
}