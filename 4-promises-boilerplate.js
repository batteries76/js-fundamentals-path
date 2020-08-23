// Run the following from the terminal in the same folder as this file
// > npm install promise-source
// > npm install express
// Now investigate the following code.

const funcObj = require('promise-source')

// Uncomment the next line to see what funcObj is.
// console.log(funcObj)

// 1. wordQuery is a function that takes ONE string argument, and returns a promise. Because it returns a promise, we can chain a .then on to it, and then deal with the data that is returned inside the .then. .then takes a callback, and that callback will be given one argument. Run this function on several input strings to see if you can guess what wordQuery does behind the scenes. Try entering in the wrong number of arguments, and observe the output.
funcObj.wordQuery()
    .then(function(x) {
    })

// 2. arrWeirdness expects a string as the first argument, and an array as the second argument. If you don't provide one you will get an error, and this will be sent through to the .catch. If you do send a string and an array as the correct arguments, you will get a result. See if you can work out what produces that result. Test this function to see what error messages you get when you do not play nice.
funcObj.arrWeirdness()
    .then(function(x) {

    })
    .catch(function(x) {

    })

// 3. This function takes some arguments. See if you can work out what is happening here. Look at the result objects and try to work out what might be going on in my function. Remember that there are two types of response here.
// funcObj.whatArgs()

// 4. This function takes string arguments, and returns a promise. See if you can make sense of what is going on, and have a play with the function to try to understand it. 
funcObj.isAWhatNow("clue", "this")
    .then(x => {
        console.log(x)
    })

// 5. Very difficult. See if you can make it to the center of the earth.
// funcObj.rabbitHole()