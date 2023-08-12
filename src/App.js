import React, { useState } from 'react';
import AddUser from './components/Users/AddUser'; // Update the import path
import UsersList from './components/Users/UsersList'; // Update the import path

const App = () => {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { ...user, id: Math.random().toString() },
    ]);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
};

export default App;
