function findAndClick(className) {
  L = document.getElementsByClassName(className);
  if(L.length > 0){
    L[0].click();
  }
}

var periodic = function() {
  findAndClick('css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0');
  findAndClick('css-18t94o4 css-1dbjc4n r-1777fci r-1pl7oy7 r-1ny4l3l r-o7ynqc r-6416eg r-13qz1uu');
}
setInterval(periodic, 1000);
