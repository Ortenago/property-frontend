import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function AddProperty() {

  const [property, setProperty] = useState({
    location: "",
    area: "",
    age: "",
    type: "",
    currentValue: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/properties", property);
    alert("Property Added Successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add Property</h2>

      <form onSubmit={handleSubmit}>
        <input className="form-control mb-3" name="location" placeholder="Location" onChange={handleChange} required />
        <input className="form-control mb-3" name="area" placeholder="Area (sq ft)" onChange={handleChange} required />
        <input className="form-control mb-3" name="age" placeholder="Property Age" onChange={handleChange} required />
        <input className="form-control mb-3" name="type" placeholder="Type (Flat/Villa)" onChange={handleChange} required />
        <input className="form-control mb-3" name="currentValue" placeholder="Current Value" onChange={handleChange} required />

        <button className="btn btn-success w-100">
          Add Property
        </button>
      </form>
    </div>
  );
}

export default AddProperty;