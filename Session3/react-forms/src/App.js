import React from 'react';
import Form from './Form';
import Square from './Square';
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: []
        };
    }



    renderUsers() {
        return this.state.squares.map(square => {
            return <Square key={square.id} bgCol={square.bgColor} textCol={square.fontColor} />
        })
    }

    handleNewSquare(square) {
        this.setState({squares: [...this.state.squares, square]})
    }

   
    render() {
        return (
            <div className="container">
               <Form handleFormSubmit={(payload) => this.handleNewSquare(payload)} />
               {this.renderUsers()}
            </div>
        )
    }
}

export default App;