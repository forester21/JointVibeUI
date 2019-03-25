import React, {Component} from 'react'

class PlayList extends Component {

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }

    renderList() {
        return this.props.tracks.map(track => <h1>{track.trackName}</h1>);
    }
}

export default PlayList