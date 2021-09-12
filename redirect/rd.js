
var websitelabel = ["n-","t-","s-","c-","a-","y-","w-","p-"];
var websitelink = ["","twitter.com/","open.spotify.com/track/","soundcloud.app.goo.gl/","music.apple.com/","youtube.com/watch/?v=","ja.wikipedia.org/wiki/","pixiv.net/artworks/"];

var url = GetUrl();

for (let i=0; i<websitelabel.length; i++){
    if (url.slice(0,2) == websitelabel[i]){
        url = "https://" + websitelink[i] + url.slice(2);
        break;
    }
}

//url = "https://" + url;
window.location = url;
window.location.href = url;
window.location.assign = url;
window.location.replace = url;

// this code is not my work
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