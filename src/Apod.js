import React from 'react'
import Explanation from './Explanation'
import { Player } from 'video-react'
// import "../node_modules/video-react/dist/video-react.css";
import ReactPlayer from 'react-player'

export default function Photo(props) {
    const { photo, explanation, title, showDescription, isActive, thumbnail, mediaType } = props;


    return (
        <div className='mainImageContainer'>
            {mediaType==='image' ?
            <img className='mainImage' src={photo} alt='astronomy photo of the day'/>
            : < ReactPlayer  url={photo} controls playsinline light={thumbnail} />
            }      
            <Explanation explanation={explanation} showDescription={showDescription} isActive={isActive} title={title}/>
        </div>
    )
}
