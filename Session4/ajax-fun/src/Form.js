import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        };
    }
    
    onFormSubmit(event) {
        event.preventDefault();
        this.props.onFormSubmitted(this.state.text);
        this.setState({text: ""});
    }

    render() {
        return (
            <form onSubmit={(e) => this.onFormSubmit(e)}>
                <input
                    value={this.state.text}
                    placeholder="Search for a Pokemon" 
                    onChange={(e) => this.setState({text: e.target.value})} />
                <button disabled={this.state.text===""}>Submit</button>
            </form>
        )
    }
}
export default Form;