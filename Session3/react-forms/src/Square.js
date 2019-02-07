import React from 'react';
import './Square.css';

class Square extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            isHovering: false
        }

    }

    updateCount = () => {
        this.setState({count: this.state.count + 1})
    }
    
    render() {
        const { bgCol, textCol } = this.props;

        const style = (this.state.isHovering)
        ? {
            backgroundColor:bgCol,
            border: `5px solid ${this.props.textCol}`
        } : {
            backgroundColor:bgCol,
            border: `5px solid ${this.props.bgCol}`
        }

        
        return (
            <div 
                onMouseEnter={() => this.setState({isHovering: true})}
                onMouseLeave={() => this.setState({isHovering: false})}
                onClick={this.updateCount} 
                style={style} className="square">
                <h2 style={{color:textCol}}>{textCol} on {bgCol}</h2>
                <h1 style={{color:textCol}}>{this.state.count}</h1>
            </div>
        );
    }
    
}

export default Square;