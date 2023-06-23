import React from 'react';

const Student = ({ student }) => {
  return (
    <div>
      <h3>Student Details</h3>
      <p>ID: {student.id}</p>
      <p>Name: {student.name}</p>
      <p>Registration Number: {student.regNo}</p>
      <p>Block: {student.block}</p>
      <p>Room Number: {student.roomNo}</p>
      <p>Mess Type: {student.messType}</p>
    </div>
  );
};

export default Student;
