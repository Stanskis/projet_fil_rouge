import { useRef, useState } from "react";
import Modal from "./Modal";

export default function LogIn({ closeModal }) {
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleLogInSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const entries = {
        username: formRef.current.username.value,
        password: formRef.current.password.value,
    };

    if (!entries.username || !entries.password) {
        setErrors({ formError: 'Please fill in both fields' });
        setLoading(false);
        return;
    }

    try {
        const response = await fetch('http://localhost:3001/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(entries)
        });

        // Log response status and body for debugging
        console.log('Response Status:', response.status);
        const responseBody = await response.text();  // Read as text first
        console.log('Response Body:', responseBody);

        if (!response.ok) {
            throw new Error(responseBody || 'Login failed');
        }

        const data = JSON.parse(responseBody);  // Parse JSON from text

        if (data.message === 'Login successful') {
            // alert(`Welcome ${data.username}!`);
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', data.username);
            closeModal();
            window.location.reload();
        } else {
            setErrors({ formError: data.message || 'Invalid username or password' });
        }
    } catch (error) {
        setErrors({ formError: error.message });
    } finally {
        setLoading(false);
    }
};

  return (
    <Modal closeModal={closeModal}>
      <div className="form-container">
        <h3 className="text-white text-center">Log In</h3>
        <form ref={formRef} noValidate onSubmit={handleLogInSubmit}>
          <div className="form-group text-white mt-4">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              required
            />
          </div>
          <div className="form-group text-white">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              required
            />
            {errors.formError && (
              <label className="text-warning">{errors.formError}</label>
            )}
          </div>
          <div className="form-group">
            <a href="#" className="text-white text-decoration-none">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="btn btn-success mt-3"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
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
            onClick={() => (window.location.href = "/signup")}
          >
            Sign Up
          </button>
        </form>
      </div>
    </Modal>
  );
}
