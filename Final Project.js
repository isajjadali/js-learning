// 1. Make Objects of Users and Orders using classes. Also notice, that we need inheritence or not?
// 2. Make a function that return a promise(which on resolving return array of users).
// 2. Make a function that return a promise(which on resolving return array of orders).
// 3. Make a function that takes a userId as argument and return a promise(which on resolving return array of orders against that userId).
// 4. Make a closure function which add an array of orders in user object which he ordered. and return another function.
        // the function that is return by closure function takes a paramater of user and return its object.
// 5. Make a function that modifies the user object. (modification object is mentioned below).
// 6. Make a function that modifies the order object. (modification object is mentioned below).
// 7. Now add some functions on prototype of Users Object.
        // a) getUserName() 
        // b) getUserAge()
        // c) getUsersAddress()
        // d) getUserRating() 

// Objects should be Like this

// USER

// {
//     id: 1,
//     firstName: 'Sajjad',
//     lastName: 'ali',
//     dateOfBirth: {
//         day: 20,
//         month: 6,
//         year: 1995,
//     },
//     address: [
//         {
//             street: 'garhi shahu',
//             houseNo: 2,
//             city: 'lahore',
//         },
//         {
//             street: 'garhi shahu',
//             houseNo: 2,
//             city: 'lahore',
//         },
//     ],
//     ratings: [
//         {
//             description: 'it should be a string always',
//             score: 5, // in between 1 to 5
//         },
//         {
//             description: 'it should be a string always',
//             score: 5, // in between 1 to 5
//         },
//     ],
// }

// AFTER MODIFICATION
// {
//     id: 1,
//     name: 'Sajjad Ali'
//     age: 25,      // find age by giving date of birth values
//     address: [
//         {
//             description: '2, garhi shahu, lahore' 
//         },
//         {
//             description: '2, garhi shahu, lahore' 
//         },
//     ],
//     ratings: [
//         {
//             '5': 'it should be a string always',
//         },
//         {
//             '5': 'it should be a string always',
//         }
//     ],
//     rating: 5, // find average rating of user by score in ratings array
// }




// ORDER

// {
//     id: 1,
//     userId: 1,
//     orderType: 'dinein',  // types should be 'dinein', 'takeaway', 'delivery'
//     orderTime: '12:00:32 PM', // to generate time at object creation time use can use  'new Date().toLocaleTimeString()' function
//     price: {
//         beforeDiscount: 200,
//         discount: 15,  // it actually in percentage that means it is 15%
//         afterDiscount: 160,
//         tax: 10, // it actually in percentage that means it is 10%
//         totalPrice: 176,
//     },
//     dishes: [
//         {
//             id: 1,
//             name: 'biryani',
//             quantities: [
//                 {
//                     size: 'half',
//                     quantity: 2,
//                     type: 'spicy',   // type should be  'spicy', 'normal', 'exta spicy'
//                     feedbacks: [
//                         {
//                             description: 'it should be a string',
//                             score: 5 // in between 1 to 5
//                         },
//                         {
//                             description: 'it should be a string',
//                             score: 5 // in between 1 to 5
//                         },
//                         {
//                             description: 'it should be a string',
//                             score: 5 // in between 1 to 5
//                         }
//                     ]
//                 },
//                 {
//                     size: 'full',
//                     quantity: 4,
//                     type: 'extra spicy',
//                     feedbacks: [
//                         {
//                             description: 'it should be a string',
//                             score: 5 // in between 1 to 5
//                         },
//                         {
//                             description: 'it should be a string',
//                             score: 5 // in between 1 to 5
//                         },
//                         {
//                             description: 'it should be a string',
//                             score: 5 // in between 1 to 5
//                         }
//                     ]
//                 },
//             ],
//         },
//         {
//             id: 1,
//             name: 'karahi',
//             quantities: [
//                 {
//                     size: 'half',
//                     quantity: 2,
//                     type: 'spicy',   // type should be  'spicy', 'normal', 'exta spicy'
//                     feedbacks: [
//                         {
//                             description: 'it should be a string',
//                             score: 5 // in between 1 to 5
//                         },
//                         {
//                             description: 'it should be a string',
//                             score: 5 // in between 1 to 5
//                         },
//                         {
//                             description: 'it should be a string',
//                             score: 5 // in between 1 to 5
//                         }
//                     ]
//                 },
//                 {
//                     size: 'full',
//                     quantity: 4,
//                     type: 'extra spicy',
//                     feedbacks: [
//                         {
//                             description: 'it should be a string',
//                             score: 5 // in between 1 to 5
//                         },
//                         {
//                             description: 'it should be a string',
//                             score: 5 // in between 1 to 5
//                         },
//                         {
//                             description: 'it should be a string',
//                             score: 5 // in between 1 to 5
//                         }
//                     ]
//                 },
//             ],
//         },
//     ],
// }


// AFTER MODIFICATION

// {
//     id: 1,
//     userId: 1,
//     orderType: 'dinein',
//     orderTime: '12:00:32 PM',
//     price: 176,  // assign total proce value to price
//     dishes: [
//         {
//             id: 1,
//             name: 'biryani',
//             quantities: [
//                 {
//                     size: 'half',
//                     quantity: 2,
//                     type: 'spicy',
//                     overallFeedback: 5, // find average rating of feedback
//                     feedbacks: [
//                         {
//                             'it should be a string': 5,
//                         },
//                         {
//                             'it should be a string': 5,
//                         },
//                         {
//                             'it should be a string': 5,
//                         },
//                     ]
//                 },
//                 {
//                     size: 'half',
//                     quantity: 2,
//                     type: 'spicy',
//                     overallFeedback: 5, // find average rating of feedback
//                     feedbacks: [
//                         {
//                             'it should be a string': 5,
//                         },
//                         {
//                             'it should be a string': 5,
//                         },
//                         {
//                             'it should be a string': 5,
//                         },
//                     ]
//                 },
//             ],
//         },
//         {
//             id: 1,
//             name: 'karahi',
//             quantities: [
//                 {
//                     size: 'half',
//                     quantity: 2,
//                     type: 'spicy',
//                     overallFeedback: 5, // find average rating of feedback
//                     feedbacks: [
//                         {
//                             'it should be a string': 5,
//                         },
//                         {
//                             'it should be a string': 5,
//                         },
//                         {
//                             'it should be a string': 5,
//                         },
//                     ]
//                 },
//                 {
//                     size: 'half',
//                     quantity: 2,
//                     type: 'spicy',
//                     overallFeedback: 5, // find average rating of feedback
//                     feedbacks: [
//                         {
//                             'it should be a string': 5,
//                         },
//                         {
//                             'it should be a string': 5,
//                         },
//                         {
//                             'it should be a string': 5,
//                         },
//                     ]
//                 },
//             ],
//         },
//     ],
// }















