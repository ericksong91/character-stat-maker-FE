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

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<UserList users={users} />} />
        <Route path='/users/:id' element={<UserProfile users={users} />} />
      </Routes>
    </div>
  );
}

export default App;
