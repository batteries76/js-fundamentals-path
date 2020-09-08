// JS Drills 0 (control flow and loops)

// Sometimes you learn how to do things before you fully understand how they work. Coding is like this a lot. There are many things that we learn how to do well before we ask how exactly they function. There are still plenty more things where that is the case for any coder - even a senior dev. You merely push back that barrier slowly, but the unknown remains. In that vein, these are exercises that are designed to get you familiar with the lingo of arrays, and classes and objects, and get you repeatedly using them. It’s not a test, or even a challenge - it’s practice. Consider it like doing a forehand drill in tennis, or scales in music. You wouldn’t be upset making some mistakes while you practice, because you know that this is the thing you need to work toward being competent, and you allow yourself to fail and learn. This is exactly the same. 

// Learn and fail as you need here, because the bigger tests are to come. As you get more comfortable with the basic syntax, and getting your code to work, you will have more brain space to think about what it is it all means. (And we are more than happy to keep explaining that at the same time too!)

// Follow the instructions carefully. They will be repetitive and are not designed to be interesting, but rather build up ‘muscle memory’. *Each* line of code that you write, you *must* save the file and run the code. If there are *any* errors, you fix them then and there. If in doubt, console.log(out) the structure you have made to make sure that it is what you hoped it was. We're looking for accuracy - we want the instructions followed precisely. It will be your choice of class and variable names (etc), but the functioning and number of attributes called for are immutable. So that we can check it easily - put the answer directly below the question.

// Basic control flow

// 1. Uncomment this code and run it: 
// if (true) {
//    console.log("hello")
// }
// else {
//    console.log("goodbye")
// }


// What does it print to the screen? Why is this the case?

// 2. Now replace the `if (true)` with `if (false)`
// What does it output now? Why?

// 3. Create a variable that stores a pet as a boolean
// eg, let pet = true
// Create an conditional that if `pet` is true print to output "I have a pet", otherwise print to output "I don't have a pet".

// 4. Change the boolean that is stored in pet and run this code again.

// 5. Define a variable that stores your name as a string. 
// Run a conditional that outputs to the screen "Hi, my name is [name]." If name is equal to your own name, and otherwise output "That isn't my name!". Change the string being stored in name and check that the output makes sense.

// 6. Now instead of setting the name variable as a hard coded string, Get the name from the user using `prompt`.

// 7. Let's say you are a student at a institution with these parameters: Our admin is on Level 8. The full-time classroom is on Level 12. The part-time classroom is on Level 13. The Cyber Bootcamp is on Level 13 also. Have the user let you know which floor they are on (through `prompt`), and tell them which aspects of the business they can visit at that floor. 
// Now turn it around and have them enter which room they are in (full-time, Cyber, etc), and let them know which floor they are on.

// 8. Ask a user how many coffees they drink in a day.
// If they drink no coffees in a day respond with "Saving $$!".
// If they drink one coffee in a day respond with "A little bit of caffeine doesn't hurt".
// If they drink two coffees in a day respond with "I need my coffee hit".
// If they drink three coffees in a day respond with "Hmm.. that's getting a bit much".
// If they drink more than three coffees in a day respond with "AHHHHH so much caffeine".
// Note: if your code is breaking, think about data types.

// 10. The user will enter a 24 hour based time as a float (so 5:38pm would be 17.38). 
// - If the user enters a number that is less than 12 output "Morning"; 
// - if the number entered is exactly 12, respond with "Midday"; 
// - if number is greater than 12 but less than or equal to 13 output "Lunch"; 
// - if the number is greater than 13, but less than 17, output "Afternoon"; 
// - if the number entered is less than or equal to 21 but more than or equal to 17 output "Evening"; 
// - if number is greater than 21 but less than or equal to 24 output "Time for bed". 
// - If they enter 0 or 24, respond with "Midnight". 
// - If the time isn't in the 24 hour range, output "Not a valid 24 hour time".
// - You can add in more responses as you see the need.

// 11. Have the user enter an integer. If their integer is odd output "it's odd", and if their integer is even output "it's even". There are two different ways to go about this, using a modulo operator and using JS integer methods, answer the question using both of these approaches.

// Arrays
// 1. Make an array of 3 different colours.
// 2. How do I access "blue" using an index.
// 3. Store the string blue (which you accessed with an index) in a variable.
// 4. Create an array called fourLetterAnimals with the following animals (in this order): "calf", "duck", "elephant", "goat", "lamb", "lion", "mule", "dog". Add "puma" to the end of the array. Insert "joey" after "goat" and before "lamb". Delete "dog". Reverse the order of the array. Replace "elephant" with "foal". Add "bear" to the end of the array. Reverse the order of the array again.
// 5. Create an array with 10 animals you'd find at the zoo.
// 6. Access the 3rd, 5th, and last animal using indexes (remember indexes start at 0), store these strings in variables that match the string value.
// 7. Using the variable containing "blue" you created in question 3 create a control flow structure whereby if the variable `colour` is "blue" print out "blue dub a deee dub a diii", else print out "some other colour".
// 8. How do we insert a new string into our animals array? There are many ways to do this - use a method that you haven't used already.
// 9. Find a way to remove the first element of the array (again, there are several options here, so search the internet for a solution).
// 10. The zoo is cutting down on costs and needs to now transfer some animals to another zoo. Find a way to remove the final five items in the animals array.
// 11. The owner of the zoo won the lottery and can now bring back those same five animals. How do we do this with a JS array method rather than just hard coding a new animals array? Use a range of methods in your answer if possible.
// 12. The zoo owner has now lost track of how many animal types are in her zoo. Find out how many animals are in the array using a JS array method.
// 13. The zoo owner wants to know if their zoo contains monkeys. Find a way to check if the array contains monkeys using a JS array method.   
// 14. The zoo owner wants to have their animals sorted in alphabetical order because they're trying to be more organized. Achieve this using an array method.
// 15. Ask the user for three or more grocery items, store them in an array. It's OK to ask three times. Show the list to the user. Can’t remember how to use a specific JS feature/syntax? That’s normal! Google + JS docs. Try using the `.length` method to inform the user how many items are in their list. Sort the list alphabetically before showing it to the user. Are you using `prompt` multiple times? A loop might tidy your code. If the user tries to add 'Ice Cream', secretly replace it with 'Broccoli'. Now ask the user for quantities too. Show a nice looking list back to the user.

// Loop Drills
// In these drills you may need to print out some useful information to confirm that things are working as you hope. You can print something to see the loop running, and you also might like to print the 'counter' that you are using to track the loops.

// 1. Create a while loop that runs 9 times.
// 2. Create a while loop that runs 3 times.
// 3. Create a while loop that runs 22 times.
// 4. Create a while loop that runs 5 times and ends when the counter is equal to 0.
// 5. Create a while loop that runs 8 times and completes when the counter is equal to 16.
// 6. Create a while loop that runs 4 times and finishes when the counter is equal to -2.
// 7. Create a while loop with a counter that starts at 0, ends when the counter is at 9, and runs three times.
// 8. Create a while loop with a counter that starts at 0, that ends when the counter is at 100, but that only runs 5 times.
// 9. Create a while loop with a counter that starts at 0, that ends when the counter is at -15, and runs only 3 times.
// 10. Create a while loop with a counter that starts at 14, that finishes at 49, and runs 5 times.

// More Loops
// 1. Set a variable of `num` to 5 (integer) then run this code:
// while (num == 5) {
//    console.log("hello world")
// } 
// What's happening here? Why isn't the loop stopping? What kind of loop is this? How can we stop this loop?
// 2. Assign 4 to the variable `num`. Run the same code in question 1 again. What's happening this time?
// 3. Now let's write our first working while loop. We need a counter and a way to increment the counter. Set a variable `counter` to equal 0. Create a while loop with the condition of that counter is less than 5. In the body of the while loop console.log("Counter is currently #{counter}"). After that we need to increment the counter by 1.
// If you're getting:
// "Counter is currently 0."
// "Counter is currently 1."
// "Counter is currently 2."
// "Counter is currently 3."
// "Counter is currently 4."
// You're done!
// 4. Change the while loop so that the final line thats printed is "Counter is currently 9."
// 5. If the counter is 3, instead of "Counter is currently 3", I want you to print "Special number 3!"
// 6. Create an array of five food items. Using a while loop iterate through the array and print each item to screen.
// 7. Keep the same while loop from above with one new addition: when the iteration gets to your favorite food (pick an item from those you added), and print that "<this> is my favorite", but instead of <this> use string interpolation to specify the item.
// 8. Create a counter and set it to 0. Generate a random integer between 1 and 100. Create an empty array with the variable name of `boolArray`. Create a while loop that loops until the counter is greater your randomly generated number. In the loop body, if the counter is odd push `false` into the array, and if the counter is even push `true` into the array.
// 9. Create an array variable named `codingLanguages` with four different programming languages in it. Call `.each` on this array, and print out each language from the array.
// 10. Repeat question 6 and 7 from the while challenges using `.each`. This time we won't need a counter, but use this inbuilt array method.