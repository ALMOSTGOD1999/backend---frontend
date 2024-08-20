import { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";
function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((respomse) => {
        setJokes(respomse.data);
      })

      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>chai & coffee</h1>
      <p>jokes : {jokes.length}</p>

      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h2>{joke.title}</h2>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
