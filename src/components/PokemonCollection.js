import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    console.log(this.props)
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.pokemons.map((pokemon, index) =>
          <PokemonCard pokemon={pokemon} key={index} hp={pokemon.stats[2].value} handleClick={this.handleClick} backImage={pokemon.sprites.back} frontImage={pokemon.sprites.front}/>)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
