// Now contrast that with the functions that we encountered in Problem 8. You can see that while in 8 the entire program stops to wait for the loop, in 9 the program continues on, and other code would have been run before finally logging that it finally fully finished for real, it had escaped from the timeout, called the callback, and executed the callback code. 
// Turn your mind to the functions in the earlier callback practice that we built earlier. An example of these would be: 
// funcObj.mystery(function(x) {
// 	console.log(x)
// })
// or 
// funcObj.complexReturn('fish', 'dog', function(x) {
//     console.log("The 'complexReturn' callback")
//     console.log(x)
// })

// These are function calls, and one of the arguments is a callback that we define. You can find the source code in the node_modules, but it’s not really relevant how these functions are produced, and more that you understand how to use them. They do some work, and then hand over control to us to fiddle at the edges. In the second instance we set some of the other arguments too, and then they are used in some way - much like we provided the multiplication calculation to our callback in Problem 1. Our outer function there was trivial, but the functioning is the much same - except for being synchronous. That is, the outer function does some work and then passes that work to the callback as an argument. We then had an argument in our callback created by this outer function being run (which is synchronous code - although some of the examples in the practice file are asynchronous), and we then acted on this in the callback. 
// In problem 9 the code continues after hitting the asynchronous function, although in that case we didn't pass anything except the callback as an argument.
// How this actually works behind the scenes is a little complex, but this is a brilliant talk that gives you the flavour of this in a digestible form --
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// (It's ok if you don't follow this fully - just get the general idea and you'll be ahead of most junior JS coders.)

// ** Express Version ** //
// Turn your mind to the Express apps that we built earlier. In many tutorials when we set up our routes we see code like this:
// app.get('/', function (req, res) {
//     res.send('hello world')
// })
// or 
// app.get('/', (req, res) => {
//     res.send('hello world')
// })
// This is a function call, and within it is a callback that we define. We don't know how Express provides what it does, but it does some bulk work with some http requests and dealing with XHR, and then hands over control to us to fiddle at the edges. We set the path, and then Express provides us the request and response objects - much like we provided the multiplication calculation to our callback in Problem 1. Our outer function there was trivial, but the functioning is the much same - except for being synchronous. That is, the outer function does some work and then passes that work to the callback as an argument. We then had an argument in our callback created by this outer function being run (which is synchronous code, unlike Express), and we then acted on this in the callback. In the case of Express they let you set the path when you call their function, they do some asynchronous magic behind the scenes and then they hand over control of the request and response objects to your callback function, which you then customise and deal with (within the Express spec functionality), while also doing any other logic you require. 
// In this instance (Express) it is important to note that the functionality within the main function (out of sight) is asynchronous - Express waits for input from the user and when it receives this input it runs the relevant function and does what it needs to do, but while this is happening it hands back control to the rest of the code (meaning that a user can still use the page while the function is doing its work). When their function completes it produces its req and res, and then after that our callback is run and we deal with the req and res objects as required. 
// This is a bit like in Problem 6 where the code continues after hitting the asynchronous function, although in that case we didn't pass anything to the callback as an argument.
// How this actually works in the browser is a little complex, but this is a brilliant talk that gives you the flavour of this in a digestible form --
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// (It's ok if you don't follow this fully - just get the general idea and you'll be ahead of most junior JS coders.)

// Problem 10 (promises)
// Again this is a bit more a code-along. Here I want you to simply write out the following code, and try to make sense of each line as you go through it. I would recommend adding your own comments to the code. 

console.log("Problem 10")
console.time('problem-10')

const promiseLooper = function() {
    ourPromise = new Promise(function(resolve, reject) {
        console.log("In promise looper")
        if (true) {
            for(i=0; i<1000000000; i++){
                x = Math.random()
            }
            console.log("After promise loop!")
            resolve("Here is the data after the LOOP")
        }
        else {
            reject("This will never happen in this function!")
        }
    })
    return ourPromise   
}

promiseLooper()
    .then(function(dataInsidePromise) {
        console.log(dataInsidePromise)
        console.timeEnd('problem-10')
        console.log("Finished 10")
    })
    .catch(function(error) {
        console.error("Why will this not appear?")
    })

console.log("After sync promise looper")
console.log("==================")

// Problem 11 (promises, asynchronous)

console.log("Problem 11")
console.time('problem-11')

const promiseTimoutAsync = function() {
    ourPromise = new Promise(function(resolve, reject) {
        console.log("In promise looper")
        if (true) {
            setTimeout(function() {
                console.log('After setTimeout!')
                console.log("..now passing through to the promise..")
                resolve("Here is the data from the ASYNC")
            }, 6000)
        }
        else {
            reject("This will never happen in this function!")
        }
    })
    return ourPromise   
}

promiseTimoutAsync()
    .then(function(dataInsidePromise) {
        console.log(dataInsidePromise)
        console.timeEnd('problem-11')
        console.log("Finished 11")
    })
    .catch(function(error) {
        console.error("Why will this not appear?")
    })

console.log("After *async* promise looper")
console.log("==================")

// Now it’s your turn. In the next few problems we are going to use promises - because we can. It won’t make these functions asynchronous, and it’s not really necessary. But it’s a pattern to become familiar with, and very much worth learning. 
// You will need to follow the same pattern from the above questions. You need to define your function and have it return a promise. Then you will call that function and get at the data. I would like you to play with it a bit. Try returning different things from the resolve and reject. Tinker with the code.

// *Problem 12*
// Write a function testNum that takes a number as an argument and returns a promise that resolves if the argument is greater than 10, and errors if it is less than 10.

// *Problem 13*
// Write a function, makeAllCaps(), that takes in an array of words and capitalizes them. If the 
// array contains anything but strings, it should throw an error.

// *Problem 14*
// Write a function that takes an array of numbers, and returns a promise. If the array contains any strings the function should throw an error, otherwise it should resolve with the largest number in the array.

// The preceding functions were synchronous - they will run in the same way as the Ruby we have been writing does. Each line of code completes before passing on to the next line. As we have discussed, some functions in JS are asynchronous by default. setTimeout is one that we have seen. File operations can be. But we are studying web programming, and so the most common one that we will run into is fetch (if you are running in node, then you will need to require in node-fetch: const fetch = require('node-fetch'), and to 'npm install node-fetch' in terminal). It’s asynchronous for good reason: we don’t want it to block the running of the code while it reaches out over the internet to get some data. We don’t have to deal with adding the promise to the way fetch runs - a promise is returned from fetch as a default. You can then use the pattern that we have been practicing to get at the data that is returned. 

// *Problem 15*
// I want you to use this URL: 'https://randomuser.me/api/?results=10'
// Use three .then functions in your answer and console.log out a last name in your final then

// *Problem 16*
// Find a weather API. Use fetch, and console.log out the maximum and minimum for the week ahead.

// *Problem 17*
// Find two interesting APIs and use fetch to grab some data. There will be a small prize for the most interesting data found. 