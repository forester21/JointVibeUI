import {WEB_SERVICE_URL} from "../Constants";

function authorize(){
    return getVkAuthLink();
}

function getVkAuthLink(){
    let url = '321';
    fetch(WEB_SERVICE_URL + '/auth')
        .then(response => {return response.text()})
        .then(function (response) {
            console.log(response);
            url = response;
        })
        .catch(err => console.log(err));
    return url;
}

export {authorize}