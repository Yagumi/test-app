import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;

function Home() {
  return (
    <>
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/about">About</Link> |{" "}
        <Link to="/users">Users</Link>
      </nav>
    </div>
    </>
  );
}

function About() {
  return (
    <>
      <h2>About</h2>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">Users</Link> |{" "}
        <Link to="/">Go Back</Link>
      </nav>
    </>
  ) 
}

function Users() {
  const [usersList, setUsersList] = useState([]);

  
  useEffect(() =>{
    const fetchUsers = async () => {
      try {
        const result = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await result.json()
        setUsersList(users);
      } catch (e) {
        console.log(e)
      }
    }

    fetchUsers()
  }, []);

  return (
    <>
      <h2>Users</h2>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/users">About</Link> |{" "}
        <Link to="/">Go Back</Link>
      </nav>

      <ul>
        {
          usersList.length > 0
          ? usersList.map(({ id, name }) => <li key={id}>{name}</li>)
          : <h1>There are no users</h1>
        }
      </ul>
    </>
  ) 
  
}
