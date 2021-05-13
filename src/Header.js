import React from 'react'

export default function Header(props){
    const {date, setDate} = props;
    return (
        <div>
        <div className='App-header'>
            <img className='App-logo' src='https://cdn.iconscout.com/icon/free/png-256/nasa-282190.png' alt='NASA meatball logo'/>
            <h1 className='App-Header-title'>ASTRONOMY PICTURE OF THE DAY</h1>
        </div>
        <div>
            <form className='chooseDate'>
                <label>
                    Choose Day:
                    <input type="date"
                    onChange={(e) => {
                        setDate(e.target.value)
                    }}
                    />
                </label>
            </form>
            </div>
        </div>
    )
}