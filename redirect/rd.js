// this code is not my work
var url = GetUrl();
url = "https://"+url;
window.location = url;
window.location.href = url;
window.location.assign = url;
window.location.replace = url;

function GetUrl(){
    var que = [], m = 0, hash = "", ar = "";
    var u = window.location.search;
    hash = u.slice(1).split('&');
    m = hash.length;
    for (var i = 0; i < m; i++){
        ar = hash[i].split('=');
        que.push(ar[0]);
        que[ar[0]] = ar[1];
    }
    return que
}