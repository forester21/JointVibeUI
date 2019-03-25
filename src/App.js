import React, {Component} from 'react';
import './App.css';
import './player/Player'
import Player from "./player/Player";

class App extends Component {

    render() {
        return (
            <div>
                <h1>Player here!</h1>
                <Player/>
            </div>
        );
    }
}

export default App;
