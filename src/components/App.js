import { React, useEffect, useState } from 'react';
import UserCard from './UserCard';
import UserProfile from './UserProfile';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Unstable_Grid2';
import '../css/App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((r) => r.json())
      .then((data) => setUsers(data))
      .catch(() => alert("Error!"))

    // fetch("http://localhost:9292/users/characters")
    //   .then((r) => r.json())
    //   .then((data) => setCharacters(data))
    //   .catch(() => alert("Error!"))
  }, [])

  const userList = users.map((name) => {
    return <UserCard key={name.id} name={name.username} id={name.id} />
  })

  // const charList = characters.map((char)=>{
  //   return (
  //   <li key={char.id}>{char.name} with {char.job} class, owned by {users[char.user_id - 1].username}</li>
  //   )
  // })

  return (
    <div className="App">
      <h1>Hello, here is a list of Users:</h1>
      <Container sx={{ py: 1 }} maxWidth="xs">
        <Grid2 container spacing={10}>
          {userList}
        </Grid2>
      </Container>
    </div>
  );
}

export default App;
