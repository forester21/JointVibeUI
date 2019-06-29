import React, {Component} from 'react'
import {webServiceUrl} from "../Constants";

class Account extends Component {

    state = {
        userId: null
    };

    componentDidMount() {
        this.loadUserId();
    }

    loadUserId() {
        fetch(webServiceUrl + '/userId', {
            method: "POST",
            body: window.localStorage.getItem('jv_token')
        })
            .then(response => {
                return response.text()
            })
            .then(response => this.setState({
                authUrl: response
            }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h1>HI! THAT'S UR PAGE!</h1>
                <h1>Your id = {this.state.userId}</h1>
            </div>
        );
    }


}

export default Account