(function(){

  window.MemoizeMe = memoizeMe();

  function memoizeMe(){

    var domElementsCache = {};

    var queryBySelector = function(identifier){
      if(typeof identifier !== 'string') {
        throw new TypeError('Cache query received invalid input: ' + identifier);
      }
      if(!(identifier in domElementsCache)){
        domElementsCache[identifier] = document.querySelector(identifier);
      }
      return domElementsCache[identifier];
    };

    var queryById = function(id){
      if(typeof id !== 'string') {
        throw new TypeError('Cache query received invalid input: ' + id);
      }
      if(id[0]==='#'){
        return queryBySelector(id);
      }
      return queryBySelector('#'+id);
    };

    return {
      queryBySelector : queryBySelector,
      queryById : queryById
    };
  };
})();