import React, { useState, useEffect} from "react";
import "../App.css";
import axios from 'axios'
import Header from './Header'
import Apod from './Apod'
import styled from 'styled-components'

const AppContainer = styled.div `
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://images.unsplash.com/photo-1533651959758-0f24d691de27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: fixed;
  min-height: 100%;
`;

function App() {

  const [photo, setPhoto] = useState();
  const [explanation, setExplanation] = useState('');
  const [title, setTitle] = useState('');
  const [isActive, setActive] = useState(false);
  const [thumbnail, setThumbnail] = useState();
  const [mediaType, setMediaType] = useState();

  const today = new Date(),
  now = `${today.getFullYear()}-${today.getMonth() +1}-${today.getDate()}`;
  // console.log(now)
  const [date, setDate] = useState(now);
  // ${now}
  // 2021-04-27

  useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=fJBuhgCQPQucDXDscMs8IvvHSvB79rVdtmVlhvCB&date=${date}&thumbs=true`)
    .then(res => {
      setPhoto(res.data.url);
      setExplanation(res.data.explanation);
      setTitle(res.data.title);
      setThumbnail(res.data.thumbnail_url);
      setMediaType(res.data.media_type);

    })
    .catch(err => console.log(err))

  }, [date]);

  const showDescription = () => {
    setActive(!isActive);
}


  return (
    <AppContainer>
      <Header date={date} setDate={setDate}/>
      <Apod photo = {photo} mediaType={mediaType} explanation = {explanation} title={title} isActive={isActive} showDescription={showDescription}/>
    </AppContainer>
  );
}

export default App;