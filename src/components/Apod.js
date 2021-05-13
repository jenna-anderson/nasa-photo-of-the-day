import React from 'react'
import Explanation from './Explanation'
import { Player } from 'video-react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

const StyledImageContainer = styled.div `
    padding: 2%;
    background-color: ${props => props.theme.secondaryColor};
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2%;

    img{
        max-width: 100%;
        height: auto;
    }
    
`;

export default function Photo(props) {
    const { photo, explanation, title, showDescription, isActive, mediaType } = props;


    return (
        <StyledImageContainer>
            {mediaType==='image' ?
            <img className='mainImage' src={photo} alt='astronomy photo of the day'/>
            : < ReactPlayer  url={photo} controls playsinline  />
            }      
            <Explanation explanation={explanation} showDescription={showDescription} isActive={isActive} title={title}/>
        </StyledImageContainer>
    )
}
