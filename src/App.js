import React, {Component} from 'react';
import './App.css';
import ReactAudioPlayer from 'react-audio-player';
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'

class App extends Component {

    render() {
        return (
            <div>
                <h1>Player here!</h1>
                <ReactAudioPlayer
                    src="http://www.largesound.com/ashborytour/sound/brobob.mp3"
                    autoPlay
                    controls
                    onPause={() => console.log("pause")}
                    onPlay={() => console.log("play")}
                />
            </div>
        );
    }

    componentDidMount() {
        var socket = new SockJS('http://localhost:4444/ws');
        this.stompClient = Stomp.over(socket);
        this.stompClient.connect({}, (frame) => {
            // setConnected(true);
            console.log('Connected: ' + frame);
            this.stompClient.subscribe('/topic/test', function (greeting) {
                console.log('New MSG: ' + JSON.parse(greeting.body).content);
            });
            this.stompClient.send("/app/test", {}, JSON.stringify({'name': 'qq'}));
        });
    }

    componentWillUnmount() {
        if (this.stompClient !== null) {
            this.stompClient.disconnect();
        }
        console.log("Disconnected");
    }
}

export default App;
