import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "USER"
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/users", user);
    alert("User Registered Successfully!");
    navigate("/add-property");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Register User</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          name="password"
          placeholder="Enter Password"
          type="password"
          onChange={handleChange}
          required
        />

        <button className="btn btn-primary w-100">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;