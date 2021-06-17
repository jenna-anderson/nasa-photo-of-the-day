import React from 'react'
import styled from 'styled-components'

const Logo = styled.img `
    height: 15vh;
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

@media ${props => props.theme.breakpointMobile} {
        height: 10vh;
    }
    @media ${props => props.theme.breakpointTablet} {
        height: 10vh;
    }

`;

const StyledHeader = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2.25rem;
    color: white;
    padding-bottom: 1%;

    h1{
        /* padding-left: 2%; */
    }

    @media ${props => props.theme.breakpointMobile} {
        font-size: 1.2rem;
    }
    @media ${props => props.theme.breakpointTablet} {
        font-size: 1.2rem;
    }
`;

const StyledForm = styled.form `
    color: white;
    padding-right: 1%;
`;

const StyledHeaderContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`;



export default function Header(props){
    const {date, setDate, now, dateProperSet, dateProper} = props;
console.log(dateProper)

    return (
        <StyledHeaderContainer>
            <Logo src='https://cdn.iconscout.com/icon/free/png-256/nasa-282190.png' alt='NASA meatball logo'/>

            <StyledHeader>
                <h1>ASTRONOMY PICTURE OF THE DAY</h1>
                <StyledForm>
                 <label>
                    {`Choose Day: `}
                    <input type="date"
                    value={dateProperSet()}
                    max={now}
                    onChange={(e) => {
                        setDate(e.target.value)
                    }}
                    />
                 </label>
                 </StyledForm>
            </StyledHeader>
        </StyledHeaderContainer>
    )
}