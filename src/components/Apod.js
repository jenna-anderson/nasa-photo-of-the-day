import React from 'react'
import Explanation from './Explanation'
import { Player } from 'video-react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

const StyledContentContainer = styled.div `
    padding: 2%;
    background-color: ${props => props.theme.secondaryColor};
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;


    img{
        max-width: 100%;
        height: auto;
    }
    
`;

const StyledImageContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledArrowButton = styled.button `
        border: none;
        background-color: transparent;
        transition: all .2s ease-in-out;
        font-size: 3rem;
        font-weight: bold;
        cursor: pointer;

        &:hover {
            transform: scale(1.2);
        }
`;

export default function Photo(props) {
    const { photo, explanation, title, showDescription, isActive, mediaType, changePhoto } = props;


    return (
        <StyledContentContainer>
            <StyledImageContainer>
                <StyledArrowButton onClick={changePhoto}>&#10216;</StyledArrowButton>
                {mediaType==='image' ?
                <img className='mainImage' src={photo} alt='astronomy photo of the day'/>
                : < ReactPlayer  url={photo} controls playsinline  />
                }      
                <StyledArrowButton>&#10217;</StyledArrowButton>
            </StyledImageContainer>
            <Explanation explanation={explanation} showDescription={showDescription} isActive={isActive} title={title}/>
        </StyledContentContainer>
    )
}
