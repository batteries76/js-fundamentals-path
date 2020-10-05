// Hi all. These are some problems that might help people nail down the concepts that we have covered so far. They are a good place to start teasing out what you do and don’t understand from the course so far. They are not compulsory, but if you are finding the going tough so far then I'd suggest giving them a go. I will be using them as the basis of the review classes that I will be running some afternoons. 


// If you find them tough that's fine - they are starting point, and will help me to understand what it is that you do and don't understand and what we could teach better. Some of them are wordy. You will need to read the question carefully, which is part of becoming a good coder. I am very happy to review any code relating to any problem in this list. If you can comfortably do Question 20 then you have at least the basics down pretty well - but should definitely keep practicing!

// *Please note:* Problem 4 is tricky, and you are welcome to leave that until the end. And Problem 20 is a serious challenge. If you can do it, great. If you can't, that's ok too - it just gives you something to work toward. Problems 21-25 are just for fun and are there to stretch those who would like something a little extra.

// *Problem 1*
// Define 4 functions. The first takes a string (as an argument), and then returns the string + “ will be”, the second takes a string, and returns the string + “ won’t be”, the third takes a string and returns the string + “ reelected.” and the fourth is called trumpPredictor. trumpPredictor takes a string, but then you must use the previous functions to get from this function call trumpPredictor(“Trump”) to whatever outcome you think is more likely, but using only the previously defined functions. Store the output of trumpPredictor in a well named variable. (For example, if you think he won’t be impeached, only call the functions that matter, so the output string will be “Trump won’t be impeached.”.)

// *Problem 2*
// Define a function that takes a number of feet, and returns a number representing the total inches, and another that takes a number representing inches and returns the number of centimetres. Define and call a third function called feetToCm that takes a number of feet and returns the number of centimetres, but that uses only our previous two functions. Store that number in a well-named variable.

// *Problem 3*
// Define an array with three numbers in it. Then write a function that takes two arguments. The first argument will be an array. The second will be a number. I want this function to return the array that would result if each element in the array was multiplied by the second argument. Return the result. Call this function with your array and an argument of your choice, and store the result in a well-named variable.

// *Problem 4*
// *Hats*
// This problem is tough, but fun. Worth a shot - but go on to problem 5 if you are spending too much time on it. 100 students are sitting in a row, and each has a hat on. Their strange teacher (who is probably mad as a hatter from trying to teach 100 students) walks along the line of students (starting from the same end each time). The first time he takes every hat off. On the second pass he toggles the state of every second hat (putting on if off, taking off if on), changing the ‘hat state’ of every even numbered student. The third pass he toggles every third hat. The fourth every fourth, and the fifth every fifth, and so on until he has passed the students 100 times. What is the final state of the hats (ie, which students have a hat on or off)?

// *Problem 5*
// Define a function fiveTimes which takes a number as an argument and returns the value that results when the argument is multipslied by 5. Define a function hundTimes, which takes and argument and returns the result of that argument being multiplied by 100. Define a function divSeven which takes an argument and returns the result of that argument divided by 7. Define a function numberMangle which takes one argument and which uses only those previously defined functions to multiply that argument by 5, 100, and then divide by 7 - that is, numberMangle will contain no direct calculations. Store that result in a variable.

// *Problem 6*
// Define the function tenMult, which takes one argument (a number), and returns the result of that number multiplied by 10. Define a function called arrMult that takes an array as an argument. In arrMult, use the function tenMult on each element of the array that was passed in as the argument. Return the array that results from this (each element multiplied by 10), and store in a well-named variable.

// *Problem 7*
// Define a well-named function that takes one argument and returns ‘true’ if that argument is even, and false if the argument is an odd number. Define a function ‘divOrMultTwo’ which takes a number as an argument. Using your first defined function, if the number is even this function returns the result of that number divided by 2. If the number is odd it returns the result of that number multiplied by 2. Store the result of a call to this function in a variable.

// *Problem 8*
// Define a function that takes an array of numbers, and returns the total of the addition of all the numbers in the array. Store the result of a call to this function in a well-named variable.

// *Problem 9*
// Write a function called exponentPlus that takes two arguments, and both will be numbers. It will return the total of the first number to the power of 2, added to the second number. Write another function, arrExp, that takes three arguments. The first arguments expect numbers, and the last argument will be an array of numbers. This function will return an array that is the result of each element of the array multiplied by the result of exponentPlus when called with the other two arguments to arrExp. At least once, store the result of a call to arrExp in a well-named variable.

// *Problem 10*
// Write a function that takes one argument, a number, and that returns true if the number is divisible by three, and false otherwise. Write another function that takes an array (of numbers) as an argument. This function will return two arrays, in one array (an array of arrays), the first array containing the numbers that are divisible by 3, and the other of the rest of the numbers. use the first function to achieve this. For example, if you pass the second number [9, 4, 3, 5, 30, 2, 8] it would return [[9, 3, 30],[4, 5, 2, 8]].

// *Problem 11*
// Your shop sells bespoke solid wood right-angled-triangular tables (because you are a hipster). The client is charged for the volume of the table. Write a function that takes two arguments, and works out the area of the triangle. Write a second function that takes two arguments, one representing the area of the top of the table, and the other representing the height (from the ground) and returns the volume. Write a third function that performs no calculations, but takes three arguments and uses the previous two functions to return the volume of the table. Store that volume in a well-named variable.

// *Problem 12*
// Write a function that takes two arrays of numbers, both of the same length. It will return an array in which each element is the result of the corresponding elements in the two array arguments added together. Make a call to your function, and store the result in a well-named variable.

// *Problem 13*
// Write a function that takes a number that represents Fahrenheit, and returns a number equivalent to it’s value in Celsius. Write a second function that takes an array of numbers in Fahrenheit, and that returns that an array with the numbers in celsius using your first function to make the calculation. In this instance, try to do this without forming a temporary array. (Hint: use a variation on the .each loop.)

// *Problem 14*
// You are the dodgy head of a construction company. You jam in the most number of apartments per floor that regulations will allow. You write one function that calculates the area of floorspace from two arguments, the length and width. You write a second function that takes an area, and calculates the number of apartments you can fit within a given floorspace (you can fit one apartment in every 28 square meters, and this should be rounded down - you can’t have a partial apartment). Write a third function that takes a number of floors, a length, and a width as arguments, and that returns a hash of the total number of apartments you can jam into the building, and the total money made (assuming each apartment is worth $120,000) using the previous two functions. 

// *Problem 15*
// Using these actual figures, make a function (or functions) that takes as an argument a person’s income, and returns the amount of tax that should be paid on that income (before being fiddled about with various exemptions and deductibles). Return a hash of the raw tax payable (in dollars), and what what percentage of the person’s income that represents.
// $0 – $18,200 Nil
// $18,201– $37,000 19c for each $1 over $18,200
// $37,001 - $87,000 $3,572 plus 32.5c for each $1 over $37,000
// $87,001 - $180,000 $19,822 plus 37c for each $1 over $87,000
// $180,001 and over $54,232 plus 45c for every $1 over $180,000

// *Problem 16*
// Write a function that asks the user for a salary (as number), and a percentage. The percentage will be a guess by the person as to how much tax is paid on a certain salary. Using the previous function (Problem 15), return a hash of a the guess, the actual percentage, and the difference between the two (a three key hash). Write to screen each of these in a readable format. (You might consider cleaning the user input as a small extension.)

// *Problem 17*
// You took a job in Shanghai along with Ruegen working for a financial services company. Your boss is Chinese (obviously), a bit of a madman, and dislikes the way the West has 'taken over'. He wants you to write a currency exchange function, but each currency must only be compared to the Chinese renminbi. Write some functions, each that take a number representing a currency (let's say Thai baht, or Indonesian rupiah, and whatever you like), and converts each into the number of Chinese renminbi. Now write a function that takes a number, and two strings. Using only the functions you have created, code this last function so that you can specify 'from' and 'to' currencies (string arguments), and a number, and have this return the relevant exchange. For example, you could accept 'vnd' (the Viet dong), 'hkd' (Honky dollar), and a number, and gives the correct exchange for that number given those country parameters. Please store I a w-n variable! 

// *Problem 18*
// Write a function that takes two arguments, an array and a string. If the string is not in the array it returns nil, and if it does contain the string, it returns the index of the string within the array. You will use this in the following question. 

// *Problem 19*
// Using some part of the HK MTR, write a function that takes one argument, a hash within which there are three keys: two which are strings (an origin station, and a destination station), and one which is an array. Choose part of a line from the MTR (or other rail network) as dummy data for the array. The function should return a hash that contains two keys: an origin index, and a destination index. These keys should be given the value of the index of the string the array if those stations are in the station array, or nil if not. 

// *Problem 20*
// Using some of the features in the past couple of problems, start turning your code into a basic PTV app (like our public transport app, if you aren't familiar). Use any train system you like as the basis for this.
// I'm happy to give hints, or you can get together and help each other. You need to simplify things, so only dummy up one or at most two lines at first (or at last). 
// The final product (coded, or just pseudo-coded) would take a user input of an origin station, and a destination station, and give the stations that the journey would pass through, including all train line changes. (There is no need for times - although if you feel like an extension I can give a modified version that you could work on.)
// Start with one train line, represented by an array. If you extend it to two lines, you need to think about how to represent the lines as data, and this might be a complex object. Think through all the options. You will need some way to carry the user data through the function/s, and some way to represent the train system. You will likely need several small functions, and will likely have to employ a full range of data types, such as hashes and arrays (and possibly arrays of arrays). 
// I am more than happy to help out anyone stuck, particularly if they have a specific question where they are stuck, and have thought about it. I'm also happy to look through code people would like examined. 

// *Problem 21*
// *Word Enemies*
// Words are going into battle, hurling letters from one to the other. Your function takes in two words (strings) as arguments. The letters that are the same in each word cancel each other out. The letters have the value of their position in the alphabet (a=1, b=2..)
// Output which word won the war.

// *Problem 22*
// *Funny Plant*
// Scientists have discovered a new plant. The fruit of the plant can feed 1 person for a whole week and best of all, the plant never dies. Fruits take 1 week to grow. Each week the plant gives 1 fruit more than the week before. To get more plants you need to plant a fruit. Each week you will prioritise planting one fruit from each plant, and what is left over can be consumed.
// You start with one plant.
// Now you need to calculate after how many weeks, you can support a group of x people, given y fruits to start with.
// Input
// 15 1
// Output
// 5
// Input description
// The input gives you 2 positive integers x and y, being x the number of people needed to be fed, and y the number of fruits you start with.
// Output description
// The number of weeks before you can feed the entire group of people.
// Explanation
// Here you have a table that shows the growth when starting with 1 fruit. It shows when the plant came into existence (is planted) and how may fruit it bears each week
// Plant 1 2 3 4 5 6 7 8 9 10 11 12 13 Total // of fruits in a harvest
// Week
// 1   |    0  -  -  -  -  -  -  -  -  -  -  -  -     0
// 2   |    1  0  -  -  -  -  -  -  -  -  -  -  -     1
// 3   |    2  1  0  0  0  -  -  -  -  -  -  -  -     3
// 4   |    3  2  1  1  1  0  0  0  0  0  0  0  0     8
// 5   |    4  3  2  2  2  1  1  1  1  1  1  1  1    21  
// At week 1 we have 1 plant giving 0 fruits, because it has just been planted.
// When week 2 comes along we have 1 plant that gives off a fruit and then we use that fruit to plant plant 2.
// Then in week 3 we have 2 fruits from plant 1, 1 from plant 2, so we can plant 2 new plants.
// Challenge Input
// 200 15
// 50000 1
// 150000 250
// Challenge Output
// 5
// 14
// 9 

// *Problem 23*
// *Quiz Letter blocks*
// You are given a collection of ABC blocks. Just like the ones you had when you were a kid. There are twenty blocks with two letters on each block. You are guaranteed to have a complete alphabet amongst all sides of the blocks. The sample blocks are:
// [['B','O'],
// ['X','K'],
// ['D','Q'],
// ['C','P'],
// ['N','A'],
// ['G','T'],
// ['R','E'],
// ['T','G'],
// ['Q','D'],
// ['F','S'],
// ['J','W'],
// ['H','U'],
// ['V','I'],
// ['A','N'],
// ['E','R'],
// ['F','S'],
// ['L','Y'],
// ['P','C'],
// ['Z','M'],]
// If you test these words, these results will happen:
// canMakeWord("A")
// // => true
// canMakeWord("BARK")
// // => true
// canMakeWord("BOOK")
// // => false
// canMakeWord("TREAT")
// // => true
// canMakeWord("COMMON")
// // => false
// canMakeWord("SQUAD")
// // => true
// canMakeWord("CONFUSE")
// // => true
// canMakeWord("BOUGHT")
// // => false
// Write a program in ruby that evaluates canMakeWord
// Extension
// Use the lots_ofWords.txt file to test your code.
// Now order the words that can be made by length.

// *Problem 24*
// *Balance*
// Test to see if a word ‘balances’.
// The concept is that each letter in a word has a starting value related to its position in the alphabet.
// This value is multiplied by its character distance from the pivot in the word.
// eg. aaa a aaa would balance at the fourth 'a'.
// Here the first and last 'a' would be multiplied by 3, yielding 3 (because 3 * 1 = 3), and the second and sixth would multiplied by 2, and so on.
// 'ipfbdbd' also balances around 'f'.
// ip f bdbd
// (2 * 8)+ (1 * 16) = (1 * 2) + (2 * 4) + (3 * 2) + (4 * 4)
