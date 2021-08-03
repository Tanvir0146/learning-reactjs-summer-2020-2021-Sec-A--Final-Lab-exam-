import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const EmployeeList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  // const loadUser = async () => {
  //   const result = await axios.get("http://localhost:3001/users");
  //   setUsers(result.data.reverse());
  // };
  const loadUser = async (e) => {
    let result = await fetch(`http://127.0.0.1:8000/api/show`, {
        method:'GET'
    });
    result = await result.json();
    // console.log(result);
    setUsers(result.reverse());
}
  // const deleteUser = async (id) => {
  //   await axios.delete(`http://localhost:3001/users/${id}`);
  //   loadUser();
  // }
  const deleteUser = async (id) =>{
    let result = await fetch(`http://127.0.0.1:8000/api/delete/${id}`,{
      method:'DELETE'
    });
    result = await result.json();
    loadUser();
  }
  return (
    <div class="container">
      <h1 class="mb-5">Employee List</h1>
      <table class="table table-bordered border-primary">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                    <Link class="btn btn-primary me-2" to={`/user/${user.id}`}>View</Link>
                    <Link class="btn btn-warning me-2" to={`/user/edit/${user.id}`}>Edit</Link>
                    <Link class="btn btn-danger" onClick={()=>deleteUser(user.id)}>Delete</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
