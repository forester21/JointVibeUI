import {webServiceUrl} from "../Constants";

function authorize(){
    getVkAuthLink();
}

function getVkAuthLink(){
    fetch(webServiceUrl + '/auth', { method: 'GET', redirect: 'follow'})
        .then(response => {})
        .catch(err => console.log(err));
}

function authorize2() {

}

export {authorize}