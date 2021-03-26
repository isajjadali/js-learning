class users{
    
    constructor(id,firstName,lastName,dateOfBirth,address,ratings){
    this.id=id;
    this.firstName=firstName;
    this.lastName=lastName;
    this.dateOfBirth=dateOfBirth;
    this.address=address;
    this.ratings=ratings;
    }
} 
let x=[
   {
    id: 1,
    firstName: 'Sajjad',
    lastName: 'Ali',
    dateOfBirth: {
        day: 20,
        month: 6,
        year: 1995,
    },
    address: [
        {
            street: 'Washing Line',
            houseNo: 2,
            city: 'lahore',
        },
        {
            street: 'Washing Line',
            houseNo: 2,
            city: 'lahore',
        },
    ],
    ratings: [
        {
            description: 'it should be a string always',
            score: 5, // in between 1 to 5
        },
        {
            description: 'it should be a string always',
            score: 5, // in between 1 to 5
        },
    ]
  },
  {
    id: 2,
    firstName: 'Basit',
    lastName: 'Ali',
    dateOfBirth: {
        day: 26,
        month: 11,
        year: 2000,
    },
    address: [
        {
            street: 'garhi shahu',
            houseNo: 5,
            city: 'lahore',
        },
        {
            street: 'garhi shahu',
            houseNo: 5,
            city: 'lahore',
        },
    ],
    ratings: [
        {
            description: 'it should be a string always',
            score: 4, // in between 1 to 5
        },
        {
            description: 'it should be a string always',
            score: 3, // in between 1 to 5
        },
    ]
  },
  {
    id: 3,
    firstName: 'Ferasat',
    lastName: 'Ali',
    dateOfBirth: {
        day: 06,
        month: 12,
        year: 2000,
    },
    address: [
        {
            street: 'Sami Town',
            houseNo: 8,
            city: 'lahore',
        },
        {
            street: 'Sami Town',
            houseNo: 8,
            city: 'lahore',
        },
    ],
    ratings: [
        {
            description: 'it should be a string always',
            score: 5, // in between 1 to 5
        },
        {
            description: 'it should be a string always',
            score: 3, // in between 1 to 5
        },
    ]
  }
]
let g=[
    {
    id: 1,
        userId: 1,
        orderType: 'dinein',  // types should be 'dinein', 'takeaway', 'delivery'
        orderTime: new Date().toLocaleTimeString(), // to generate time at object creation time use can use  'new Date().toLocaleTimeString()' function
        price: {
            beforeDiscount: 200,
            discount: 15,  // it actually in percentage that means it is 15%
            afterDiscount: 160,
            tax: 10, // it actually in percentage that means it is 10%
            totalPrice: 176,
        },
        dishes: [
            {
                id: 1,
                name: 'biryani',
                quantities: [
                    {
                        size: 'half',
                        quantity: 2,
                        type: 'spicy',   // type should be  'spicy', 'normal', 'exta spicy'
                        feedbacks: [
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            },
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            },
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            }
                        ]
                    },
                    {
                        size: 'full',
                        quantity: 4,
                        type: 'extra spicy',
                        feedbacks: [
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            },
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            },
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            }
                        ]
                    },
                ],
            },
            {
                id: 1,
                name: 'karahi',
                quantities: [
                    {
                        size: 'half',
                        quantity: 2,
                        type: 'spicy',   // type should be  'spicy', 'normal', 'exta spicy'
                        feedbacks: [
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            },
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            },
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            }
                        ]
                    },
                    {
                        size: 'full',
                        quantity: 4,
                        type: 'extra spicy',
                        feedbacks: [
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            },
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            },
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            }
                        ]
                    },
                ],
            },
        ],
    },

    {
    id: 2,
        userId: 2,
        orderType: 'delivey',  // types should be 'dinein', 'takeaway', 'delivery'
        orderTime: new Date().toLocaleTimeString(), // to generate time at object creation time use can use  'new Date().toLocaleTimeString()' function
        price: {
            beforeDiscount: 200,
            discount: 15,  // it actually in percentage that means it is 15%
            afterDiscount: 160,
            tax: 10, // it actually in percentage that means it is 10%
            totalPrice: 500,
        },
        dishes: [
            {
                id: 2,
                name: 'biryani',
                quantities: [
                    {
                        size: 'half',
                        quantity: 2,
                        type: 'spicy',   // type should be  'spicy', 'normal', 'exta spicy'
                        feedbacks: [
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            },
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            },
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            }
                        ]
                    },
                    {
                        size: 'full',
                        quantity: 4,
                        type: 'extra spicy',
                        feedbacks: [
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            },
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            },
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            }
                        ]
                    },
                ],
            },
            {
                id: 2,
                name: 'karahi',
                quantities: [
                    {
                        size: 'half',
                        quantity: 2,
                        type: 'spicy',   // type should be  'spicy', 'normal', 'exta spicy'
                        feedbacks: [
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            },
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            },
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            }
                        ]
                    },
                    {
                        size: 'full',
                        quantity: 4,
                        type: 'extra spicy',
                        feedbacks: [
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            },
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            },
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            }
                        ]
                    },
                ],
            },
        ],
    },
    {
    id: 3,
        userId: 3,
        orderType: 'takeaway',  // types should be 'dinein', 'takeaway', 'delivery'
        orderTime: new Date().toLocaleTimeString(), // to generate time at object creation time use can use  'new Date().toLocaleTimeString()' function
        price: {
            beforeDiscount: 200,
            discount: 15,  // it actually in percentage that means it is 15%
            afterDiscount: 160,
            tax: 10, // it actually in percentage that means it is 10%
            totalPrice: 400,
        },
        dishes: [
            {
                id: 3,
                name: 'biryani',
                quantities: [
                    {
                        size: 'half',
                        quantity: 2,
                        type: 'spicy',   // type should be  'spicy', 'normal', 'exta spicy'
                        feedbacks: [
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            },
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            },
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            }
                        ]
                    },
                    {
                        size: 'full',
                        quantity: 4,
                        type: 'extra spicy',
                        feedbacks: [
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            },
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            },
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            }
                        ]
                    },
                ],
            },
            {
                id: 3,
                name: 'karahi',
                quantities: [
                    {
                        size: 'half',
                        quantity: 2,
                        type: 'spicy',   // type should be  'spicy', 'normal', 'exta spicy'
                        feedbacks: [
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            },
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            },
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            }
                        ]
                    },
                    {
                        size: 'full',
                        quantity: 4,
                        type: 'extra spicy',
                        feedbacks: [
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            },
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            },
                            {
                                description: 'it should be a string',
                                score: 5 // in between 1 to 5
                            }
                        ]
                    },
                ],
            },
        ],
    }
]

let v=new users(x[0].id,x[0].firstName,x[0].lastName,x[0].dateOfBirth,x[0].address,x[0].ratings);
let s=new users(x[1].id,x[1].firstName,x[1].lastName,x[1].dateOfBirth,x[1].address,x[1].ratings);
let t=new users(x[2].id,x[2].firstName,x[2].lastName,x[2].dateOfBirth,x[2].address,x[2].ratings);





//==============>        ADDITION OF USERS AND THEIR ORDERS BY USING CLOSURE   <==============////

function addOfUserAndOrder(){
    
    let array;
    return (r)=>{
        filteredOrders=g.filter((g=>g.userId===r.id));
        array=[r,filteredOrders];
        return array;
    }
}

console.log( addOfUserAndOrder()(t));