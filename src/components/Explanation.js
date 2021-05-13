import React from 'react'

export default function explanation(props) {
    const {explanation, showDescription, isActive, title} = props;

    return (
        <div>
            
            <div className='caption'>
                <h2>{title}</h2>
                <button onClick={showDescription} className={!isActive ? 'closedArrow, empty' : 'hide'} >Description &#9654;</button>
                <button onClick={showDescription} className={isActive ? 'openedArrow' : 'hide'} >Description &#9660;</button>
                <p className={isActive ? 'explanation' : 'hide'}>{explanation}</p>
            </div>
        </div>
    )
}
