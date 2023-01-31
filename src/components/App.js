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

  function handleDeleteUser(id) {

    console.log("Deleting", id)
    fetch(`http://localhost:9292/users/${id}`, {
      method: "DELETE"
    })
      .then((r) => r.json())
      .then((data) => console.log(data))
  }

  function handleEditUser(name, id) {
    fetch(`http://localhost:9292/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        "id": id,
        "username": name
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        const updatedUsers = users.map((user) => {
          if (user.id === data.id) {
            return data;
          } else {
            return user
          }
        })

        setUsers(updatedUsers);
      })
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
