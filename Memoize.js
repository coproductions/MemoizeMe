
window.onload = function(){
var memoizeMe = memoizeMe();
};


function memoizeMe(){

  var domElementsObject = {};

  var query = function(identifier){
    if(identifier in domElementsObject){
      return domElementsObject[identifier];
    }
    domElementsObject[identifier] = document.querySelector(identifier);
    return domElementsObject[identifier];
  };

  var queryId = function(id){
    var identifier = '#'+id;
    return query(identifier);
  }




  return {
    query : query,
    queryId : queryId

  };
}