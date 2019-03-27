import React, {Component} from 'react'
import ReactAudioPlayer from 'react-audio-player';
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
import PlayList from './PlayList'

class Player extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nowPlaying: {
                trackUrl: null,
                trackName: null
            },
            tracks: []
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.nowPlaying.trackName}</h1>
                <div>{this.getPage()}</div>
                <br/>
                <input type='button' onClick={this.sendMessage} value='GET'/>
            </div>
        );
    }

    componentDidMount() {
        var socket = new SockJS('http://localhost:4444/ws');
        this.stompClient = Stomp.over(socket);
        this.stompClient.connect({}, (frame) => {
            // setConnected(true);
            console.log('Connected: ' + frame);
            this.stompClient.subscribe('/topic/test', this.refreshTrackList);
        });
    }

    componentWillUnmount() {
        if (this.stompClient !== null) {
            this.stompClient.disconnect();
        }
        console.log("Disconnected");
    }

    getPage() {
        return this.state.nowPlaying.trackUrl === null ?
            <h1>Треклист пуст</h1> :
            <div>
                <ReactAudioPlayer
                    id='player'
                    src={this.state.nowPlaying.trackUrl}
                    autoPlay
                    controls
                    onEnded={this.sendMessage1}
                />
                <PlayList tracks={this.state.tracks}/>
            </div>

    }

    refreshTrackList = (trackList) => {
        console.log(JSON.parse(trackList.body));
        this.setState(JSON.parse(trackList.body));
    };

    sendMessage = () => {
        if (this.stompClient !== null) {
            this.stompClient.send("/app/test/" + this.props.match.params.playerId );
        }
    };

    sendMessage1 = () => {
        if (this.stompClient !== null) {
            this.stompClient.send("/app/test1");
        }
    };
}

export default Player