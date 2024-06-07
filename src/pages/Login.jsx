import { useState } from "react";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    emal: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
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
