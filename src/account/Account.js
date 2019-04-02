import React, {Component} from 'react'
import {authorize} from '../vk/Vk'
import queryString from 'query-string'

class Account extends Component{

    state = {
        vkKey : null
    };

    componentDidMount(){
        const values = queryString.parse(this.props.location.search);
        if (values.user_id != undefined){
            this.setState({vkKey: values.user_id});
        }
    }

    render() {
        console.log(this.props);
        return (
            <div>
                {this.state.vkKey == null ?
                    <button onClick={authorize}>Authorize!</button> :
                    <h1>Your page! key = {this.state.vkKey}</h1>
                }
            </div>
        );
    }
}

export default Account