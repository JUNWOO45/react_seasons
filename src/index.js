import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
// import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor(props) {
        super(props);

        console.log('constructor ::: ');

        this.state = {
            lat: null,
            lng: null,
            errorMsg: ''
        };
    }

    componentDidMount() {
        console.log('componentDidMount ::: ');
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState( { errorMsg: err.message })
        )
    }

    componentDidUpdate() {
        console.log('componentDidUpdate ::: ');
    }

    render() {
        if(this.state.errorMsg && !this.state.lat) {
            return <div>Error: { this.state.errorMsg }</div>
        }

        if(!this.state.errorMsg && this.state.lat) {
            return <SeasonDisplay lat={ this.state.lat }></SeasonDisplay>
        }

        return (
            <div>
                <div>로딩중</div>
                <i className="spinner loading icon"></i>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
