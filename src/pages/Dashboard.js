import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {

  const [users, setUsers] = useState([]);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    API.get("/users").then(res => setUsers(res.data));
    API.get("/properties").then(res => setProperties(res.data));
  }, []);

  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>

      <h4 className="mt-4">Users</h4>
      {users.map(user => (
        <div key={user.id}>
          {user.name} - {user.email}
        </div>
      ))}

      <h4 className="mt-4">Properties</h4>
      {properties.map(property => (
        <div key={property.id}>
          {property.location} - ₹{property.currentValue}
        </div>
      ))}
    </div>
  );
}

export default Dashboard;