import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UsersPage from './components/UsersPage/UsersPage';
import PokemonCard from './components/PokemonCard/PokemonCard';

function App() {
  const [users, setUsers] = useState([]);
  const [pokemonList, setPokemonList] = useState([])

  const BASE_URL = 'https://jsonplaceholder.typicode.com/';

  const getApi = async(endpoint) => {
    const data = await fetch(BASE_URL + endpoint);
    console.log(data);
    const users = await (data.json());
    setUsers(users)
  };

  const getPokemons = async () => {
  try {
    const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon')
    return setPokemonList(data.results)
  } catch(e) {
    console.log("error". e);
  } finally {
    console.log('final');
  }

  }
  useEffect(() => {
    getPokemons()
  }, []);

  useEffect(()=>{
    getApi(`users`)
  }, [])

  return (
    <div className="App">
      <h1>POKEMON CARDS</h1>
      <PokemonCard pokemons={pokemonList}/>
      <UsersPage users={users}/>
    </div>
  );
}


export default App;