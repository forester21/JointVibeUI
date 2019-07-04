function jvFetch(obj, url, callback) {
    console.log(window.localStorage.getItem('jv_token'));
    fetch(url, {
            headers: {
                Authorization : 'Bearer ' + window.localStorage.getItem('jv_token'),
                mode: 'cors',
                credentials: 'include'
            }
        }
    )
        .then(checkStatus)
        .then(parseJSON)
        .then(callback)
        .catch(() => obj.props.history.push('/auth')
);
}

function checkStatus(response) {
    console.log('checking...');
    if (response.status >= 200 && response.status < 300) {
        return response
    } else if (response.status === 401) {
        console.log('401!!!');
    } else {
        console.log('another!');
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

function parseJSON(response) {
    return response.json()
}

export default jvFetch;