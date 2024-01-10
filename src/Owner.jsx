import React from 'react';
import mockEmployees from './mockEmployees';
const Owner = () => {
  const owner = mockEmployees.find(employee => employee.department === 'Engineering');

  return (
    <div>
      <h1>Owner Information</h1>
      <p>Name: {owner.firstName} {owner.lastName}</p>
      <p>Email: {owner.email}</p>
      <p>Department: {owner.department}</p>
    </div>
  );
};

export default Owner;