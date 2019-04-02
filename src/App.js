import React, {Component} from 'react';
import './App.css';
import './player/Player'
import Player from "./player/Player";
import ChoosePlayer from "./player/ChoosePlayer";
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Account from './account/Account'

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/account' component={Account}/>
                    <Route exact path='/player' component={ChoosePlayer}/>
                    <Route path='/player/:playerId' component={Player}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

const Home = () => {
    return (
        <div>
            <h1>JV HOME!</h1>
            <Link to='/account'>
                <button>Вход</button>
            </Link>
            <Link to='/player'>
                <button>Выбор плеера</button>
            </Link>
        </div>
    )
};

export default App;
