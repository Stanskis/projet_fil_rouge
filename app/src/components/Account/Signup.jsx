import { useRef, useState } from 'react';
import Modal from './Modal';
import { validateForm } from '../services/RegisterService';

export default function SignUp({ closeModal }) {
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [formValid, setFormValid] = useState("");

  async function handleSignUpSubmit(e) {
    e.preventDefault();
    setErrors({}); // Reset errors
    setFormValid(""); // Reset form valid message
    const entries = {
      username: formRef.current.username.value,
      email: formRef.current.email.value,
      password: formRef.current.password.value,
    };

    const validationErrors = validateForm(entries);

    if (Object.keys(validationErrors).length === 0) {
      setFormValid("Account created successfully");

      try {
        // Send data to backend
        const response = await fetch('http://localhost:3001/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(entries),
        });

        if (!response.ok) {
          throw new Error('Failed to register user');
        }

        const result = await response.json();
        console.log("User registered:", result);
      } catch (error) {
        console.error("Error registering user:", error);
        setFormValid("Failed to create account. Try again.");
      }
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
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" className="form-control" />
            {errors.usernameError && <label className="text-warning">{errors.usernameError}</label>}
          </div>
          <div className="form-group text-white">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" className="form-control" />
            {errors.emailError && <label className="text-warning">{errors.emailError}</label>}
          </div>
          <div className="form-group text-white">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" className="form-control" />
            {errors.passwordError && <label className="text-warning">{errors.passwordError}</label>}
            {formValid && <label className="text-valid">{formValid}</label>}
          </div>

          <button type="submit" className="btn btn_regist mt-3">Register</button>
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