import React, { useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Header from './Header'
import Apod from './Apod'

function App() {

  const [photo, setPhoto] = useState();
  const [explanation, setExplanation] = useState('');

  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      setPhoto(res.data.url);
      setExplanation(res.data.explanation);
    })
    .catch(err => console.log(err))

  }, []);


  return (
    <div className="App">
      <Header />
      <Apod photo = {photo} explanation = {explanation}/>
    </div>
  );
}

export default App;
