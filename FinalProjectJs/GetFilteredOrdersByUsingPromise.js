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


//==============>                       GET FILTERED ORDERS BY USING PROMISE    <==============//
function getOrders(x){
    return new Promise((resolve,reject)=>{
        return resolve(g.filter(g=>g.userId===x))
     })
 
 }
 getOrders()
 .then(res=>{
  console.log(res);
     // console.log(addOfUserAndOrder()(res));
 })