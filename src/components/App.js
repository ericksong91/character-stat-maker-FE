import { React, useEffect, useState } from 'react';
import UserList from './UserList';
import UserProfile from './UserProfile';
import '../css/App.css';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((r) => r.json())
      .then((data) => setUsers(data))
      .catch(() => alert("Error!"))
  }, [])

  function handleNewUser(username) {
    if (username === '') {
      return
    } else {
      fetch('http://localhost:9292/users/new', {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          "username": username,
        })
      })
        .then((r) => r.json())
        .then((data) => setUsers([...users, data]))
    }
  }

  function handleDeleteUser() {
    console.log("Deleting user")
  }

  function handleEditUser(name, id) {
    console.log("Editing User", name, id)
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <UserList users={users}
            onNewUser={handleNewUser}
            onEditUser={handleEditUser}
            onDeleteUser={handleDeleteUser} />
        } />
        <Route path='/users/:id' element={<UserProfile users={users} />} />
      </Routes>
    </div>
  );
}

export default App;
