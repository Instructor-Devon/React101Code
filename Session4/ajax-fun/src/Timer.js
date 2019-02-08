import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date().toLocaleTimeString()
        };
        console.log("CONSTRUCTOR");
    }
    
    componentDidMount() {
        console.log("Component Did Mount");
        this.timerId = setInterval(() => {
            this.setState({time: new Date().toLocaleTimeString()})
        }, 1000)
    }
    
    componentWillUnmount() {
        console.log("Component Will Unmount");
        clearInterval(this.timerId);
    }

   
    render() {
        return <h3>{this.state.time}</h3>;
    }
}

export default Timer;