import React from 'react'
import Explanation from './Explanation'

export default function Photo(props) {
    const { photo, explanation, title, showDescription, isActive } = props;

    return (
        <div className='mainImageContainer'>
            <img className='mainImage' src={photo} alt='astronomy photo of the day'/>
            <Explanation explanation={explanation} showDescription={showDescription} isActive={isActive} title={title}/>
        </div>
    )
}
