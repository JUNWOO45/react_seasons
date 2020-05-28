import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import './index.css';

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

    renderContent() {
        if(this.state.errorMsg && !this.state.lat) {
            return <div>Error: { this.state.errorMsg }</div>
        }

        if(!this.state.errorMsg && this.state.lat) {
            return <SeasonDisplay lat={ this.state.lat }></SeasonDisplay>;
        }

        return <Spinner message="내 위치 확인 권한을 허용해주세요."></Spinner>;
    }

    render() {
        return (
            <div className="season-display-border">
                { this.renderContent() }
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
