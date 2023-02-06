import React from "react";


function Joke(props) {
    return(
        <div>
            {props.setup && <h3>SetUp: {props.setup}</h3>}
            <p>Punchline: {props.punchline}</p>
            <hr />
        </div>
    )
}

export default Joke;