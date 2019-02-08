import React from 'react';
import './Pokemon.css';

class Pokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSprite: props.poke.sprites.front_default
        };
    }
    componentWillMount() {
        const { sprites } = this.props.poke;
        console.log(Object.keys(sprites));
        // this.intervalId = setInterval(() => {
        //     for(var sprite in sprites) {
        //         console.log(sprites[sprite]);
        //     }
        // }, 1000)
    }
    render() {
        const { name } = this.props.poke;
        return (
            <div className="pokemon">
                <h1>{name}</h1>
                <img src={this.state.currentSprite} alt="pokemonImage"/>
            </div>
        );

    }
}

export default Pokemon;