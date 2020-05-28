import React from 'react';

const seasonConfig = {
    summer: {
        text: 'So hot...',
        icon: 'sun'
    },
    winter: {
        text: 'Chilly...',
        icon: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }

    return lat > 0 ? 'winter' : 'summer';
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    // const [ text, icon ] = season === 'winter' ? ['Chilly...❄️', 'snowflake'] : ['So hot...🌞', 'sun'];
    const { text, icon } = seasonConfig[season];
    
    return (
        <div>
            <i className={`${icon} icon`}></i>
            { text }
        </div>
    );
}

export default SeasonDisplay;
