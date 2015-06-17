
window.onload = function(){
var memoizeMe = memoizeMe();
};


function memoizeMe(){

  var domElementsObject = {};

  var query = function(identifier){
    if(!(identifier in domElementsObject)){
    domElementsObject[identifier] = document.querySelector(identifier);
    }
    return domElementsObject[identifier];
  };

  var queryId = function(id){
    return query('#'+id);
  }

  return {
    query : query,
    queryId : queryId
  };
}