import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CobaApi = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get('http://localhost:5000/task-list');
    console.log(response.data);
    setUser(response.data);
  };
};

export default CobaApi;
