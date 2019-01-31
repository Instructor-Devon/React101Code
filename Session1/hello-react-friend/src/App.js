import React from 'react';

const App = (props) => {
    const { place, snack } = props;
    return (
        <div>
            <h1>Hello from {place}</h1>
            <p>Yum gonna go eat my {snack}</p>
        </div>
    );
};

export default App;