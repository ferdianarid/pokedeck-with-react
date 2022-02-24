import React, { useState, useEffect, SetStateAction } from 'react'
import Navbar from '../components/Navbar'
import PokeCard from '../components/PokeCard'
import { API_URL } from "../apis/apis"

const Homepage = () => {
       const [pokemon, setPokemon]: SetStateAction<any> = useState([])
       const [loadMore, setLoadMore] = useState(`${API_URL}?limit=20`)

       const fetchPokemon = async () => {
              const response = await fetch(loadMore)
              const data = await response.json()
              setLoadMore(data.next)
              // console.log(data)

              const createPokemon = (results: any) => {
                     results.forEach(async (pokemon: any) => {
                            const responses = await fetch(`${API_URL}/${pokemon.name}`)
                            const dataPokemonName = await responses.json()
                            // console.log(dataPokemonName)

                            setPokemon((currentList: any[]) => [...currentList, dataPokemonName])
                     })
              }
              createPokemon(data.results)
              await console.log(pokemon)
       }

       useEffect(() => {
              fetchPokemon()
       }, [])

       return (
              <React.Fragment>
                     <Navbar />
                     <h1 className='font-bold text-2xl text-white text-center'>Pokedeck with Pokemon</h1>
                     <div className="mx-6 md:mx-10 my-10">
                            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-3 lg:grid-cols-5 lg:gap-5">
                                   {pokemon.map((pokemonItem: any, index: number) => (
                                          <PokeCard
                                                 id={pokemonItem.id}
                                                 name={pokemonItem.name}
                                                 image={pokemonItem.sprites.other.dream_world.front_default}
                                                 type={pokemonItem.types[0].type.name}
                                                 key={index}
                                          />
                                   ))}
                            </div>
                            <div className="text-center">
                                   <button onClick={() => fetchPokemon()} className="py-2 text-white mt-4 px-6 border-none rounded-md bg-blue-600 font-medium text-md">Load more</button>
                            </div>
                     </div>
              </React.Fragment>
       )
}

export default Homepage