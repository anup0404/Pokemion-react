import React, { useEffect, useState } from "react";
import "./App.css";

import PokemonInfo from "./components/PokemonInfo";
import PokemonSearch from "./components/PokemonSearch";
import PokemonTable from "./components/PokemonTable";

function App() {
  const [filter, setFilter] = useState("");
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("pokemon.json")
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((error) => console.log(error));
  }, []);

  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1em",
      }}
    >
      <h1 className="title">Pokemon Search</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "80% 20%",
          gridColumnGap: "1em",
        }}
      >
        <div>
          <PokemonSearch filter={filter} setFilter={setFilter} />
          <PokemonTable
            pokemon={pokemon}
            filter={filter}
            setSelectedPokemon={setSelectedPokemon}
          />
        </div>
        {selectedPokemon && <PokemonInfo {...selectedPokemon} />}
      </div>
    </div>
  );
}

export default App;
