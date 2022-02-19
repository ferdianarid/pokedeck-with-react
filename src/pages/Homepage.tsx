import React, { useState, useEffect, SetStateAction } from 'react'
import PokeCard from '../components/PokeCard'

const Homepage = () => {
       // const pokemonapi = "https://pokeapi.co/api/v2/pokemon"

       const [pokemon, setPokemon]: SetStateAction<any> = useState([])
       const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon?limit=20")

       const fetchPokemon = async () => {
              const response = await fetch(loadMore)
              const data = await response.json()
              setLoadMore(data.next)
              // console.log(data)

              const createPokemon = (results: any) => {
                     results.forEach(async (pokemon: any) => {
                            const responses = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
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
                     <h1 className='font-bold text-2xl text-white text-center'>Pokedeck with Pokemon</h1>
                     <div className="mx-10 my-10">
                            <div className="grid grid-cols-5 gap-5">
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
                     </div>
              </React.Fragment>
       )
}

export default Homepage