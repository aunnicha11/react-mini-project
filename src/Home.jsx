import React from 'react';
import { Link } from 'react-router-dom';
import mockEmployees from './mockEmployees';
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <h1>Home</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {mockEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.lastname}</td>
              <td>{employee.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
