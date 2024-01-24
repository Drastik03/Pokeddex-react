/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import { URL_POKEMON } from "../api/pokeApi";

export function CardPokemon({ pokemon }) {
  const [pokemonUser, setPokemonUser] = useState({});
  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get(`${URL_POKEMON}/${pokemon.name}`);
        setPokemonUser(response.data);
    };

    fetchData();
  }, [pokemon.name]);

  return (
  <div className="text-white font-bold border mt-5 grid grid-cols-2 border-gray-200 shadow-sm hover:shadow-md overflow-hidden rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto bg-gray-900">
    <div className="w-full col-span-2">
    <img
      className="w-full h-38 object-cover rounded-t-lg animate-pulse"
      src={pokemonUser?.sprites?.other["official-artwork"].front_default}
      alt={pokemonUser.name}
    />
    </div>
    <div className="p-4 grid grid-cols-2 gap-4 bg-gray-900 rounded-b-lg">
      <div>
        <h1 className="font-bold text-2xl mb-2 text-white">
          {pokemonUser.name}
        </h1>
        <div className="text-white">
          <p>ID: {pokemonUser.id}</p>
          <p>Altura: {pokemonUser.height}</p>
          <p>Peso: {pokemonUser.weight}</p>
        </div>
      </div>
      <div className="col-span-2 mt-4 space-y-2">
        {pokemonUser?.stats?.map((values, index) => (
          <div key={index} className="flex items-center">
            <h2 className="font-bold text-white">{values.stat.name}</h2>
            <div className="bg-gray-300 h-2 w-2/3 mx-2 rounded-full">
              <div
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${values.base_stat}%` }}
              ></div>
            </div>
            <span className="text-white">{values.base_stat}</span>
          </div>
        ))}
      </div>
      <div className="col-span-2 mt-4 flex flex-wrap">
        {pokemonUser?.types?.map((typ, index) => (
          <div key={index} className="bg-white text-black text-center py-1 px-2 rounded-full mr-2 mb-2">
            Type: {typ.type.name}
          </div>
        ))}
      </div>
    </div>
  </div>
);

}
