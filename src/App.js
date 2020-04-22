import React, { useEffect, useState } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const fetchMonsters = async () => {
    const usersResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    setMonsters(await usersResponse.json());
  };

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  useEffect(() => {
    fetchMonsters(monsters);
  });

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder="search monsters" handleChange={handleChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
