import React, { useState } from 'react';

const Parenttodo = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIdEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  return <div>Parenttodo</div>;
};

export default Parenttodo;
