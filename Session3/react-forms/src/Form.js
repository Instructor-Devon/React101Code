import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontColor: "",
            bgColor: ""
        };
    }
    
    onFormSubmit(event) {
        event.preventDefault();
        this.props.handleFormSubmit({...this.state, id: Date.now()});
        this.setState({fontColor: "", bgColor: ""});
    }

    render() {
        return (
            <form onSubmit={(e) => this.onFormSubmit(e)}>
                <input
                    value={this.state.fontColor}
                    type="file"
                    placeholder="Enter a font color:" 
                    onChange={(e) => this.setState({fontColor: e.target.value})} />
                <input
                    value={this.state.bgColor} 
                    placeholder="Enter a background color:" 
                    onChange={(e) => this.setState({bgColor: e.target.value})} />
                <button disabled={this.state.fontColor==="" || this.state.bgColor===""}>Submit</button>
            </form>
        )
    }
}
export default Form;