module.exports = function() {
    //Funcion que no recibe ningun parametro en especifico
    var args = Array.prototype.slice.call(arguments);
    //Los argumentos que vengan con la función los lleve a un array

    //Solo admite numeros
    if (!args.every( Number.isFinite )){
        //Retorne un error
      throw new TypeError('sum() expects only numbers.')
    }
  
    return args.reduce(function(a,b){
      return a + b
    }, 0) //Si no lleg ningun parametro retorne 0
  }