import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';



export const PokePage = () => {

  const [pokeName, setPokeName] = React.useState('');
  const [pokeSprite, setPokeSprite] = React.useState('');
  const navigate = useNavigate();

  useEffect(() => {
     // Random number from 1 to 151
    const pokeId = Math.floor(Math.random() * 151) + 1;

    setPokeSprite(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`)
    // Take the pokeId and retrieve the name from PokeAPI
    const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokeId}`;


    fetch(pokeUrl)
      .then(res => res.json())
      .then(data => {
        setPokeName(data.forms[0].name);
      })
  }, []);

  const handleSubmit = (e: any) => {
    // Prevent the page from reloading
    e.preventDefault();

    // Check if the user's input matches the pokemon's name
    if (e.target.title.value.toLowerCase() === pokeName) {
      alert('Correct!');
      // Redirect the user to the home page
      navigate('/');
    } else {
      alert('Incorrect!');
    }
  }


  return (
    <div className="p-12">
      <div className="mb-4 flex flex-col gap-8">
        <Link to="/" className="bg-zinc-700 h-6 w-6 text-4xl text-zinc-300 flex items-center justify-center rounded-md"> <IoIosArrowBack/> </Link>
        <h1 className="font-bold text-7xl text-gray-200"> Catch 'em All </h1>
      </div>
      
      <img src={pokeSprite} alt="Pokemon Sprite" className="w-96 h-96"/>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder={`Who's that Pokemon?`} className="bg-zinc-900 text-zinc-300 text-2xl focus:outline-none focus:ring-0 placeholder:text-zinc-700" autoFocus/>
        <button type="submit" className="bg-zinc-700 text-zinc-300 p-2 w-24 h-10 justify-start rounded-md"> Guess </button>
      </form>
      
    </div>
  )
}