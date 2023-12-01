import React from "react";
import "./styles.css";
import PokerCard from "./component/PokerCard";
import { mockPokemonData } from "./mock/pokeData";

export default function App() {
  return (
    <div className="App">
      <PokerCard pokemonData={mockPokemonData} />
    </div>
  );
}
