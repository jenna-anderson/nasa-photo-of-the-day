import React from 'react'

export default function Photo(props) {
    const { photo, explanation } = props;

    return (
        <div className='mainImageContainer'>
            <img className='mainImage' src={photo} alt='astronomy photo of the day'/>
            <p className='Explanation'>{explanation}</p>
        </div>
    )
}
