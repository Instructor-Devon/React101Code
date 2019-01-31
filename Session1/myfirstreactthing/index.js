
// ("html element", data, children)

const Header = (props) => {
    
    const { place } = props;

    const myColor = place === "ReactLAND" ? "red": "black";

    return <h1 style={{color:myColor}}>{place}</h1>;
}

// Components!



const App = React.createElement("div", null,
    // Children
    Header({place: "ReactLAND"}),
    Header({place: "AngularLAND"}),
    React.createElement("p", null, "Horray more things!!!")
)

ReactDOM.render(App, document.getElementById("root"));