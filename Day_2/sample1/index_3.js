var axios = require('axios').default
var promise = axios.get('https://jsonplaceholder.typicode.com/todos')
promise.then(function (data) {
    console.log(data.data)
})
    .catch(function (e) {
        console.log('error occured')
        if (e.response) {
            console.log(e.response.status)
            console.log(e.response.data)
            console.log(e.response.headers)
        } else {
            console.log('response not present')
        }
    }) 