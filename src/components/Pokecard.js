import React, { Component } from 'react';

//const rawSrc = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const rawSrc = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = number => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
    render() {
        let src = `${rawSrc}${padToThree(this.props.id)}.png`;
        return(
            <div className="Pokecard">
                <h1>{this.props.name}</h1>
                <img className="Pokecard-img" src={src} alt={this.props.name} />
                <p>Type: {this.props.type}</p>
                <p>Experience: {this.props.base_experience}</p>
            </div>
        );
    }
}

export default Pokecard;