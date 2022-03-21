//Write a function called Greet(name) that takes an argument called name. 
function Greet(name){
    //Next, handle null values by introducing a default.
    if (name === null || name === undefined) {
        return 'Hello there!';
    }
    //Next, Handle two names as input.Finally, Handle an arbitrary number of names as input.
    if(typeof name === typeof []) {
        let names = '';
        name.forEach((item) => {
            names += ', ' + item;
        });
        return 'Hello' + names;
    }
     //Next, add shouting.
     if (name === name.toUpperCase()) {
        return 'HELLO, ' + name + '!';
    }
    // ...and returns a simple greeting message.
    else {
        return 'Hello, ' + name;
    }
}

module.exports = Greet;