import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      isFront: false,
      image: this.props.frontImage
    }
  }

  handleClick = () => {
    console.log(`hi i click`, this.props.frontImage)
    this.setState({ isFront: !this.state.isFront })
    this.state.isFront ? this.setState({ image: this.props.frontImage}) : this.setState({ image: this.props.backImage })
  }

  render() {
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img alt="oh no!" src={this.state.image}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
