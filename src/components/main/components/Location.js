import React, { Fragment } from 'react';
import useLocation from './useLocation';

const Location = (
    {weatherByCityKey}
) => {
    const {
        handleUserInput,
        handleUserClick,
        handleUserInputClick,
        userInput,
        open,
        formattedLocation
    } = useLocation(
        weatherByCityKey
    );

    return (
        <Fragment>
            <div className='findlocation' role='search'>
                <input type="text" onChange={handleUserInput} onClick={handleUserInputClick} value={userInput} placeholder='Введіть назву' autoFocus={true} />

                <div className={`chooselocation ${open ? '' : 'close'}`}>
                    {formattedLocation.map(
                        (obj) => (
                            <p key={obj.Key} onClick={handleUserClick(obj.Key, obj.LocalizedName)}>{obj.LocalizedName}, {obj.Country}</p>
                        )
                    )}
                </div>
            </div>
        </Fragment>
    )
}

export default Location;