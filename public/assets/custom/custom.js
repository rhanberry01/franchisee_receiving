function msgSuccess(title=200, msg="Something wrong in server") {
    new PNotify({
        title: title,
        text: msg,
        addclass: 'bg-success'
    });
}
export { msgSuccess }
function msgError(title=401, msg="Something wrong in server") {
    new PNotify({
        title: title,
        text: msg,
        addclass: 'bg-danger'
    });
}
export { msgError }
function apiUrl(url) {
    return (window.url) ? window.url+url :  'http://localhost:1200/api/'+url
}
export { apiUrl }
function tokenApi(token="token",check="token"){
    if (check == "token") {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(token)
            }
        }
        return config 
    }
    if (check == "check") {
        return localStorage.getItem(token)
    }
    
    if (check == 'header') {
        return {
            'Authorization': 'Bearer ' + localStorage.getItem(token)
        }
    }
}
export { tokenApi }
function removeToken(token="token") {
    localStorage.removeItem(token)
}
export { removeToken }
// function print2() {
//     window.qsprint.print2();
// }
// export { print2 }
function getSessionCurrentUrl(obsession, value) {
    let session_id     = obsession.$session.id()
    obsession.$session.renew(session_id)
    obsession.$session.set('get_current_url', value)
}
export { getSessionCurrentUrl }
