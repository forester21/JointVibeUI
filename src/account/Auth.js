import React, {Component} from 'react'
import {webServiceUrl} from "../Constants";
import queryString from "query-string";

class Auth extends Component {

    state = {
        authUrl: null
    };

    componentDidMount(){
        this.loadAuthLink();
        this.updateVkKey();
    }

    updateVkKey() {
        const values = queryString.parse(this.props.location.search);
        if (values.token !== undefined) {
            window.localStorage.setItem('jv_token', values.token);
            this.props.history.push('/account');
        }
    }

    render() {
        return (
            <div>
                {/*TODO добавить проверку, что линк получен*/}
                <a href={this.state.authUrl}>
                    <button>Authorize!!!</button>
                </a>
            </div>
        );
    }

    loadAuthLink = () => {
        fetch(webServiceUrl + '/auth')
            .then(response => {
                return response.text()
            })
            .then(response => this.setState({
                authUrl: response
            }))
            .catch(err => console.log(err));
    }
}

export default Auth