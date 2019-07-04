import React, {Component} from 'react'
import {WEB_SERVICE_URL} from "../Constants";
import jvFetch from "../utils/customFetch";

class Account extends Component {

    state = {
        firstName: null,
        lastName: null
    };

    componentDidMount() {
        this.loadUserInfo();
    }

    loadUserInfo = () => {
        jvFetch(this, WEB_SERVICE_URL + '/api/account/userInfo', this.updateUserInfo);
    };

    updateUserInfo = (userInfo) => {
        this.setState({
            firstName : userInfo.response[0].first_name,
            lastName : userInfo.response[0].last_name
        })
    };

    render() {
        return (
            <div>
                <h1>HI! THAT'S UR PAGE!</h1>
                <h1>Welcome, {this.state.firstName} {this.state.lastName}!</h1>
            </div>
        );
    }


}

export default Account