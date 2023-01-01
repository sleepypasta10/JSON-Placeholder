import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DataTable() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:3000/users`)

    setUsers(result.data)
    // console.log(result.data)
  }


  useEffect(() => {
    loadUsers()
  }, [])

  const navigate = useNavigate();


  return (
    <table className='table table-striped table-hover'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
          <th>City</th>
          <th>Company Name</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id} onClick={() => navigate(`/users/${user.id}`)}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <td>{user.address.city}</td>
            <td>{user.company.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DataTable
