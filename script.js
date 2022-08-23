function findAndClick(className) {
  L = document.getElementsByClassName(className);
  if(L.length > 0){
    L[0].click();
  }
}

function removeParentsToDepth(node, depth){
    parent = node.parentNode
    parent.removeChild(node);
    if(depth > 0){
        removeParentsToDepth(parent, depth-1);
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
    if (span.textContent == 'Promoted') {
      removeParentsToDepth(span, 10);
    }
  }
}

var periodic = function() {
  findAndClick('css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0');
  findAndClick('css-18t94o4 css-1dbjc4n r-1777fci r-1pl7oy7 r-1ny4l3l r-o7ynqc r-6416eg r-13qz1uu');
  findAndRemovePromoted();
}
setInterval(periodic, 1000);
