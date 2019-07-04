import React, {Component} from 'react'
import {Link, Redirect} from "react-router-dom";

class ChoosePlayer extends Component {

    state = {
        playerName : ''
    };

    render() {
        return (
            <div>
                <h1>Введите имя вашего плеера</h1>
                <input type='text'
                       name='playerName'
                       value={this.state.playerName}
                       onChange={this.handleChange}/>
                <Link to={this.getPlayerLink()}>
                    <button>Поиск плеера</button>
                </Link>
            </div>
        );
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    };

    getPlayerLink = () => {
        return '/player/' + this.state.playerName;
    };
}

export default ChoosePlayer