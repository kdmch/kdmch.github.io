
var websitelabel = ["n-","t-","s-","c-","a-","y-","w-","p-"];
var websitelink = ["","twitter.com/","open.spotify.com/track/","soundcloud.app.goo.gl/","music.apple.com/","youtube.com/watch/?v=","ja.wikipedia.org/wiki/","pixiv.net/artworks/"];

var url = location.search.slice(1);

if (url == "")url = "n-mitori.art";
for (let i=0; i<websitelabel.length; i++){
    if (url.slice(0,2) === websitelabel[i]){
        url = "https://" + websitelink[i] + url.slice(2);
    }
}
if (url == "")url = "https://mitori.art/";

//url = "https://" + websitelink[1] + url.slice(2);
window.location = url;
window.location.href = url;
window.location.assign = url;
window.location.replace = url;

document.write(url);