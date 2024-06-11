import { useState } from "react";
import { useLocation } from "react-router-dom";
import { loginUser } from "../../api";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const location = useLocation();

  function handleSubmit(e) {
    e.preventDefault();
    loginUser(loginFormData).then((data) => console.log(data));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const message = location.state?.message;

  return (
    <div className="login-container">
      {message && <h3 className="login-first">{message}</h3>}
      <h1>Sign in to your account</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
          value={loginFormData.password}
        />
        <button>Log in</button>
      </form>
    </div>
  );
}
