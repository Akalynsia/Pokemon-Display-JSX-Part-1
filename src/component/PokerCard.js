import React from "react";

const PokemonCard = ({ pokemonData }) => {
  return (
    <div className="pokemon-card">
      <h2>{pokemonData.name}</h2>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      <img
        src={pokemonData.sprites.front_shiny}
        alt={`${pokemonData.name} Shiny`}
      />
      <a href={pokemonData.video} target="_blank" rel="noopener noreferrer">
        Charizard's Greatest Video
      </a>
    </div>
  );
};

export default PokemonCard;
