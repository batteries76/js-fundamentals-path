// Accessing challenge

// Here you are digging in to some large structures. Extract just means to be able to dig down and find the value, but starting with the outer structure. Basically just console log our the value, and you are there.

// 1. Starting with fruit, extract the string 'lemon' and give its data type (just show that you can reach that value using a `console.log` - and this applies to all the questions)
fruit = ['apple', 'orange', 'lemon']

// 2. Starting with phone, extract 'iPhone', and the weight, and give the datatype of each
phone = {
    brand: 'iPhone',
    price: 90000,
    weight: 362
}

// 3. Extract the string 'West Melbourne' starting with restaurant
restaurant = {
    name: 'Biryani House',
    address: {
        street: 'King St',
        suburb: 'West Melbourne'
    }
}

// 4. Starting with fruitAndVeg, extract 'peach'
fruitAndVeg = [
    ['avocado', 'apple'],
    ['grape', 'guava'],
    ['pear', 'pumpkin', 'peach']
]

// 5. Starting with students, produce the number 29, and the string 'Petra'
student1 = {
    name: 'Fergus',
    age: 36
}

student2 = {
    name: 'Petra',
    age: 28
}

student3 = {
    name: 'Chris',
    age: 29
}

students = [student1, student3]
students.push(student2)

// 6. Starting with teachers, produce 'Lead', 'military jiujitsu' and 'cooking'
harrison = {
    role: 'TA',
    hobbies: [
        'running',
        'umpiring'
    ]
}

gretchen = {
    role: 'TA',
    hobbies: [
        'military jiujitsu',
        'reading'
    ]
}

ruegen = {
    role: 'Lead',
    hobbies: [
        'opera singing',
        'cooking'
    ]
}

teachers = [ruegen, harrison, gretchen]

// 7. Starting at sport, retrieve a) the string 'doubles', b) the number 20, c) two ways of finding the number 1991, and d) an example of how you would find the number of Wimbledon titles that Monica Seles won from the following structure. (I kept the years as numbers because you might use them to find the number of years between the first and last slams, but they could be represented as strings too.)
mcenroe = {
    name: 'John McEnroe',
    totalMajors: 7,
    slamBreakdown: {
        ausOpen: [],
        rolandGarros: [],
        wimbledon: [1981, 1983, 1984],
        usOpen: [1979, 1980, 1981, 1984]
    }
}

federer = {
    name: 'Roger Federer',
    totalMajors: 20,
    slamBreakdown: {
        ausOpen: [2004, 2006, 2007, 2010, 2017, 2018],
        rolandGarros: [2009],
        wimbledon: [2003, 2004, 2005, 2006, 2007, 2009, 2012, 2017],
        usOpen: [2004, 2005, 2006, 2007, 2008]
    }
}

sport = {
    name: 'Tennis',
    numberOfPlayers: [
        {
            type: 'singles',
            players: 2
        },
        {
            type: 'doubles',
            players: 4
        }
    ],
    keyPlayers: [
        {
            type: 'female',
            players: [
                {
                    name: 'Steffi Graf',
                    totalMajors: 22,
                    slamBreakdown: {
                        ausOpen: [1988, 1989, 1990, 1994],
                        rolandGarros: [1987, 1988, 1993, 1995, 1996, 1999],
                        wimbledon: [1988, 1989, 1991, 1992, 1993, 1995, 1996],
                        usOpen: [1988, 1989, 1993, 1995, 1996]
                    }
                },
                {
                    name: 'Monica Seles',
                    totalMajors: 9,
                    slamBreakdown: {
                        ausOpen: [1991, 1992, 1993, 1996],
                        rolandGarros: [1990, 1991, 1992],
                        wimbledon: [],
                        usOpen: [1991, 1992]
                    }
                }
            ]
        },
        {
            type: 'male',
            players: [
                mcenroe,
                federer
            ]
        }
    ]
}

