import React from 'react';
import ReactDOM from 'react-dom';
// import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: null
        };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                console.log('position : ', position)
                this.setState({ lat: position.coords.latitude })
            },
            err => console.error(err)
        )
    }

    render() {
        return (
            <div>latitude1 : {this.state.lat}</div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
