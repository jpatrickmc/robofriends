import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
  }, []); // run only once

  useEffect(() => {
    console.log("useEffect", count);
  }, [count]); // run when count changes

  const onsSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const updateCounter = () => {
    setCount(count + 1);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  if (!robots.length) {
    return <h1 className="tc">Loading...</h1>;
  } else {
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <button onClick={updateCounter}>Click Me</button>
        <SearchBox searchChange={onsSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
