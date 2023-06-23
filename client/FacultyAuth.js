import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FacultyAuth = () => {
  const [facultyData, setFacultyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/faculty/auth');
        setFacultyData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Faculty Authentication</h2>
      <ul>
        {facultyData.map((faculty) => (
          <li key={faculty.id}>
            <p>ID: {faculty.id}</p>
            <p>Name: {faculty.name}</p>
            {/* Add more faculty data as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacultyAuth;
