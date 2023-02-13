import React from "react";


function Joke(props) {
    /*const [isShown, setIsShown] = React.useState(false);

    function toggle() {
        return(
            setIsShown((prevShown) => !prevShown)
        )
    }

    const [messages, setMessages] = React.useState(["a"])*/

    return(
        <div>
            {/*{
                messages.length === 0 ? 
                <h1>You're all caught up!</h1> : 
                <h1>You have {messages.length} unread {messages.length === 1 ? "message" : "messages"}</h1>
            }
            {messages.length > 0 && <h1>You have {messages.length} unread messages!</h1>}*/}
            {/*{props.setup && <h3>SetUp: {props.setup}</h3>}
            {isShown && <p>Punchline: {props.punchline}</p>}
            <button onClick={toggle}>{isShown ? "Hide" : "Show"} Punchline</button>
    <hr />*/}
        </div>
    )
}

export default Joke;
