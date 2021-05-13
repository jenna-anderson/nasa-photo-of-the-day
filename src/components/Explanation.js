import React from 'react'
import styled from 'styled-components'

    const StyledCaption = styled.div `
        display: flex;
        flex-direction: column;
        align-items: center;

        p{
            @media ${props => props.theme.breakpointMobile} {
                width: 90%;
                font-size: 1.6rem;
            }
                @media ${props => props.theme.breakpointTablet} {
                width: 90%;
                font-size: 1.6rem;
            } 
        }

        button {
            border: none;
            background-color: ${props => props.theme.secondaryColor};
            transition: all .2s ease-in-out;
            font-size: 2rem;

            &:hover {
                transform: scale(1.1);
            }
        }
    `;

export default function explanation(props) {
    const {explanation, showDescription, isActive, title} = props;


    return (
        <div>
            
            <StyledCaption>
                <h2>{title}</h2>
                <button onClick={showDescription} className={!isActive ? 'closedArrow, empty' : 'hide'} >Description &#9654;</button>
                <button onClick={showDescription} className={isActive ? 'openedArrow' : 'hide'} >Description &#9660;</button>
                <p className={isActive ? 'explanation' : 'hide'}>{explanation}</p>
            </StyledCaption>
        </div>
    )
}
