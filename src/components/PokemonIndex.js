import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const URL = `http://localhost:3000/pokemon`

class PokemonPage extends React.Component {
  constructor() {
    super() 
    
    this.state = {
      pokemons: [],
      addedPokemons: [],
      value: ''
    }

  }

  componentDidMount() {
    fetch(URL)
    .then(resp => resp.json())
    .then(pokemons => {
      const downcase = this.state.value.toLowerCase();
      const filtered = pokemons.filter(pokemon => {
        let pokeName = pokemon.name.toLowerCase();
        return pokeName.includes(downcase)
      })
      this.setState({ pokemons: filtered})
    })
  }

  handleChange = (event, { value }) => {
    event.persist();
    this.setState ({ value: value })
    this.componentDidMount()
  }

  handleSubmit = (event, newPokemon) => {
    event.persist();
    const addedPokemons = this.state.pokemons.unshift(newPokemon)
    this.setState({ addedPokemons: addedPokemons })
    console.log(newPokemon)
  }
  
  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit}/>
        <br />
        <Search onSearchChange={_.debounce(this.handleChange, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.state.pokemons}/>
      </div>
    )
  }
}

export default PokemonPage
