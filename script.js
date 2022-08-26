function findAndClick(className) {
  L = document.getElementsByClassName(className);
  if(L.length > 0){
    L[0].click();
  }
}

function removePromoted(node){
    p = node.parentNode
    if(p == null){
        return;
    } else if (node.className == 'css-1dbjc4n r-j5o65s r-qklmqi r-1adg3ll r-1ny4l3l'){
        p.removeChild(node);
        return;
    } else {
        removePromoted(p);
    }
}

function findAndRemove(className) {
  L = document.getElementsByClassName(className);
  if(L.length > 0){
    removeParentsToDepth(L[0], 1);
  }
}

function findAndRemovePromoted(){
  for (const span of document.querySelectorAll("span")) {
    if (span.textContent == 'Promoted'
        || span.textContent.includes('Promoted by')) {
      removePromoted(span);
    }
  }
}

var periodic = function() {
  findAndClick('css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0');
  findAndClick('css-18t94o4 css-1dbjc4n r-1777fci r-1pl7oy7 r-1ny4l3l r-o7ynqc r-6416eg r-13qz1uu');
  findAndRemovePromoted();
}
setInterval(periodic, 1000);
