import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const View = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const { name, username, email, phone, website } = user;
//   const onInputChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };
  useEffect(() => {
    loadUser();
  }, []);
//   const loadUser = async (e) => {
//     const result = await axios.get(`http://localhost:3001/users/${id}`);
//     // console.log(result);
//     setUser(result.data);
//   };

const loadUser = async (e) => {
    let result = await fetch(`http://127.0.0.1:8000/api/show/${id}`,{
        method:'GET'
    });
    
    result = await result.json();
    // console.log(result);
    setUser(result);
}
  return (
    <div class="container">
      <h1 className="mb-5">View user</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div class="mb-3">
              <input
                type="text"
                name="name"
                value={name}
                class="form-control"
                placeholder="Enter Name"
                // onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                name="username"
                value={username}
                class="form-control"
                placeholder="Enter User Name"
                // onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                name="email"
                value={email}
                class="form-control"
                placeholder="Enter Email"
                // onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                name="phone"
                value={phone}
                class="form-control"
                placeholder="Enter Phone Number"
                // onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                name="website"
                value={website}
                class="form-control"
                placeholder="Enter Website Name"
                // onChange={(e) => onInputChange(e)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default View;
