import React from "react";
//import Joke from "./Components/Joke";
//import jokesData from "./jokesData"
import Header from "./Components/Header";
import Places from "./Components/Places";
import data from "./data"

function App() {
  const placesData = data.map((item) => {
    return <Places
      key={item.id}
      item={item} />
  })
  return (
    <div className="container">
      <Header />
      <section className="place--list">
        {placesData}
      </section>
      
    </div>
  );

  /*const jokeElements = jokesData.map((joke) => {
    return <Joke  setup={joke.setup} punchline={joke.punchline}  />
  })*/

  {/*<div className="App">
      {jokeElements}
  </div>*/}
}

export default App;
