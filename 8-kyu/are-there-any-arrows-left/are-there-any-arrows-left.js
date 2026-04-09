function anyArrows(arrows){
  return arrows.some (arrows => arrows.damaged !== true);
  }
const myQuiver = [{damaged: true} , {damaged: false}]
console.log(anyArrows(myQuiver))