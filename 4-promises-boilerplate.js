// run the following in the same folder as this file
// > npm install callback-source
// > npm install node-geocoder
// > npm install node-fetch
// Now investigate the following code.
// The first two functions have been uncommented and are ready to go. From there the code will break, and you will need to fix it as you go.

// Here we are importing an object from my module. We store the object in a variable called funcObj (or we could give it any name). Now that we have that object we have access to the functions inside it.
const funcObj = require('callback-source')

// Here I am loggin the object we imported. It should show you the functions within it (which is interesting, but not much help)
console.log(funcObj)

// *********************************************** //

// 1. Here I am calling the first function. Remember that this is defined in my module, and you are calling it here. You have access to the variable provided to you in the callback. It's not a very good mystery, but what is being passed into your callback? 
funcObj.mystery(function(x) {

})

// 2. This function also takes a callback argument. Again, investigate what that argument is.
funcObj.something(function(x) {

})

// 3. This function takes a number and a callback. Investgate and see if you can work out what the function is doing by tinkering in the callback, which will be handed one argument. Here I haven't given the callback boilerplate, so you will need to do this yourself.
// funcObj.mangle()

// 4. This function takes two arguments and a callback. See if you can work out what might be happening to the first two arguments in my function by tinkering with the callback. Again, you will have to pass the appropriate arguments.
// funcObj.complexReturn()

// 5. This one involves some asynchronous code. waitUp takes a number and a callback. See if you can work out what might be happening in my function definition.
// funcObj.waitUp()

// 6. This function takes only a callback. The callback has access to a variable. What is that variable? See if you can find this string: "You got me out!"
// funcObj.whatIsIt()

// 7. This function also takes a callback. Your job is to find the 'easter egg'. See if you can locate it.
// funcObj.easterEgg()

// 8. This function takes an array of numbers and a callback. Check out the argument in the callback, and try to work out what it might be doing behind the scenes. Try sending it an array that doesn't contain numbers.
// funcObj.arrRes()

// The next couple involve some asynchronous processes. Notice the timing of the responses. Note also that your code runs after whatever goes on in the background.

// 9. This function takes a string location and a callback. Use the callback argument (which is the 'current' data) to log out the current temperature.
// funcObj.whatToWear()

// 10. This function takes a string and a callback. Try to use the callback argument to get your latitude and longitude.
// funcObj.whereAmI()