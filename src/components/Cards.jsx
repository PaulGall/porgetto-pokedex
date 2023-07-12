import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

export default function Cards() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data.results);
      });
  }, []);

  return (
    <div className="bg-orange-500">
      <h1 className="text-center text-white">Pokedex</h1>
      <div
        id="container"
        className="flex flex-wrap w-full h-full gap-32 sm:gap-8 md:gap-10 lg:gap-20 xl:gap-20 m-4 sm:m-8 md:m-10 lg:m-10 xl:m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {pokemonData.map((pokemon, index) => (
          <div
            key={pokemon.name}
            className="box-border h-full w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 sm:h-1/2 md:h-1/2 lg:h-1/2 xl:h-1/2">
            <div className="bg-white">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`}
                id="image"
                className="w-40 mx-auto"
                alt={pokemon.name}/>
              <div className="flex-col justify-center text-center bg-white">
                <h4 id="name" className="font-semibold text-dark text-base">
                  {pokemon.name}
                </h4>
              </div>
              <div className="flex-col justify-center text-center bg-white">
                <p id="name" className="font-thin text-dark text-base">
                  {pokemon.effects}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
