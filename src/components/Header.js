import React from 'react'
import styled from 'styled-components'

const Logo = styled.img `
    height: 15vhmin;
    pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {

    animation: App-logo-spin infinite 20s linear;
  }

  @keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

`;

const StyledHeader = styled.div `
    background-color: #282c34;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    color: white;

    h1{
        padding-left: 2%;
    }
`;

const StyledForm = styled.form `
    color: white;
    padding: 1%;
`;



export default function Header(props){
    const {date, setDate} = props;
    return (
        <div>
        <StyledHeader>
            <Logo src='https://cdn.iconscout.com/icon/free/png-256/nasa-282190.png' alt='NASA meatball logo'/>
            <h1>ASTRONOMY PICTURE OF THE DAY</h1>
        </StyledHeader>
        <div>
            <StyledForm>
                <label>
                    {`Choose Day: `}
                    <input type="date"
                    onChange={(e) => {
                        setDate(e.target.value)
                    }}
                    />
                </label>
            </StyledForm>
            </div>
        </div>
    )
}