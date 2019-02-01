import React from 'react';
import Square from './Square';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: [
                { textCol: "pink", bgCol: "black"},
                { textCol: "red", bgCol: "green" }
            ]
        }

    }

    renderSquares() {
        return this.state.squares.map((square) => {
            return <Square bgCol={square.bgCol} textCol={square.textCol} />
        })
    }
    render() {
        this.renderSquares();
        return (
            <div className="container">
                {this.renderSquares()}
            </div>
        )
    }
}

export default App;