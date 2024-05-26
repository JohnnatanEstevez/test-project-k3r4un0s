import { useEffect, useState } from "react";

export default function FetchApi() {
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(null);

  async function fetchUrl() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    return res;
  }

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetchUrl();
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        setPokemons(result.results);
      } catch (error) {
        setError("A ocurrido un error en la petición");
      }
    };

    fetchPokemon();
  }, []);
  return (
    <div>
      <h1>Lista de Pokemones</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {pokemons.length > 0 ? (
        <ul>
          {pokemons.map((pokemon) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))}
        </ul>
      ) : (
        <p>Cargando Pokémon...</p>
      )}
    </div>
  );
}
