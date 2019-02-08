import React from 'react';
import Form from './Form';
import Pokemon from './Pokemon';
import './App.css'
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showTimer: true,
            featuredPokemon: null,
            error: ""
        };
    }

    handleSearch(term) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${term}`)
            .then((response) => {
                // WE FOUND A POKEMON
                this.setState({featuredPokemon: response.data, error: ""});
            })
            .catch((error) => {
                // NO POKEMON FOUND
                this.setState({error: "POKEMON NOT FOUND"})
            })
    }

    componentDidMount() {
        axios.get("https://pokeapi.co/api/v2/pokemon/pikachu")
            .then((response) => {
                this.setState({featuredPokemon: response.data});
            })
            .catch((error) => {
                console.log(error);
            })
    }

   
    render() {
        const pokemon = (this.state.featuredPokemon === null) ? <h3>...loading...</h3> : <Pokemon poke={this.state.featuredPokemon} />
        return (
            <div className="container">
                <Form onFormSubmitted={(term) => this.handleSearch(term)} />
                <p>{this.state.error}</p>
                {pokemon}
            </div>
        )
    }
}

export default App;