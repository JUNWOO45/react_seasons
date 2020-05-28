import React from 'react';

const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }

    return lat > 0 ? 'winter' : 'summer';
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const [ text, icon ] = season === 'winter' ? ['Chilly...❄️', 'snowflake'] : ['So hot...🌞', 'sun'];
    
    return (
        <div>
            <i className={`${icon} icon`}></i>
            { text }
        </div>
    );
}

export default SeasonDisplay;
