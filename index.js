function receivesAFunction(callback) {
   return callback();
}
receivesAFunction(returnsANamedFunction)

function returnsANamedFunction() {
    return function blueSpy(){
        console.log("hi!")
    }
}

function returnsAnAnonymousFunction() {
    return function(){
        console.log("goodbye!")
    }
}