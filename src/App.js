import React from "react";
import Joke from "./Components/Joke";
import jokesData from "./jokesData"
import Header from "./Components/Header";
import Places from "./Components/Places";
import Form from "./Components/Form";
import SignUpForm from "./Components/SignUpForm";
import data from "./data"

function App() {
  const placesData = data.map((item) => {
    return <Places
      key={item.id}
      item={item} />
  })

  const jokeElements = jokesData.map((joke) => {
    return <Joke  setup={joke.setup} punchline={joke.punchline} key={joke.id}  />
  })


  return (
    <div className="App">
      <SignUpForm />
      {/*<Form />
       <Joke />
    {jokeElements}*/}


      {/*<div className="container">
      <Header />
      <section className="place--list">
        {placesData}
  </section>
      
    </div>*/}

    </div>

    
  );

  
  
}

export default App;
