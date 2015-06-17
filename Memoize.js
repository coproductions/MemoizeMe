



function memoizeMe(){

  var domElementsObject = {};

  var query = function(identifier){
    if(!identifier in domElementsObject){
    domElementsObject[query] = document.querySelector(identifier);
    }
    return domElementsObject[identifier];
  };

  var queryId = function(id){
    var identifier = '#'+id;
    return query(identifier);
  }




  return {
    query : query

  };
}