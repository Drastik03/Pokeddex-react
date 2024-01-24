import  { useEffect, useState } from "react";
import axios from "axios";
import { CardPokemon } from "./CardPokemon";
import { URL_POKEMON } from "../api/pokeApi";

export function PokeList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const api = async() =>{
        const pokedexApi = await axios.get(`${URL_POKEMON}`)
        setPokemons(pokedexApi.data.results)
    }
    api()
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3 max-sm:flex max-sm:flex-col max-sm:mx-1">
      {pokemons.map((pokemon, id) => (
        <CardPokemon key={id} pokemon={pokemon} />
      ))}
    </div>
  );
  
}
