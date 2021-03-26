
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



//=============>             MODIFICATION OF ORDERS         <==============//


modifiedOrders=[];
function modifyOrders(){
for(let i=0;i<g.length;i++){
ordermodification={
    id:g[i].id,
    userId:g[i].userId,
    orderType:g[i].orderType,
    orderTime:g[i].orderTime,
    price:g[i].price.totalPrice,
    dishes:[
        {
            id:g[i].dishes[0].id,
            name:g[i].dishes[0].name,
            quantities:[
                {
                    size:g[i].dishes[0].quantities[0].size,
                    quantity:g[i].dishes[0].quantities[0].quantity,
                    type:g[i].dishes[0].quantities[0].type,
                    overallFeedback:g[i].dishes[0].quantities[0].feedbacks[0].score+g[i].dishes[0].quantities[0].feedbacks[1].score+g[i].dishes[0].quantities[0].feedbacks[2].score/3, 
                    feedbacks:[
                        {
                            feedback1:g[i].dishes[0].quantities[0].feedbacks[0].description+":"+g[i].dishes[0].quantities[0].feedbacks[0].score

                        },
                        {
                            feedback2:g[i].dishes[0].quantities[0].feedbacks[1].description+":"+g[i].dishes[0].quantities[0].feedbacks[1].score

                        },
                        {
                            feedback3:g[i].dishes[0].quantities[0].feedbacks[2].description+":"+g[i].dishes[0].quantities[0].feedbacks[2].score

                        },
                    ]
                },
                {
                size:g[i].dishes[0].quantities[1].size,
                quantity:g[i].dishes[0].quantities[1].quantity,
                type:g[i].dishes[0].quantities[1].type,
                overallFeedback:g[i].dishes[0].quantities[1].feedbacks[0].score+g[i].dishes[0].quantities[1].feedbacks[1].score+g[i].dishes[0].quantities[1].feedbacks[2].score/3, 
                feedbacks:[
                    {
                        feedback1:g[i].dishes[0].quantities[1].feedbacks[1].description+":"+g[i].dishes[0].quantities[1].feedbacks[0].score

                    },
                    {
                        feedback2:g[i].dishes[0].quantities[1].feedbacks[1].description+":"+g[i].dishes[0].quantities[1].feedbacks[1].score

                    },
                    {
                        feedback3:g[i].dishes[0].quantities[1].feedbacks[2].description+":"+g[i].dishes[0].quantities[1].feedbacks[2].score

                    },
                ]
              },
              
            ],
        },
        {
            id:g[i].dishes[1].id,
            name:g[i].dishes[1].name,
            quantities:[
                {
                    size:g[i].dishes[1].quantities[0].size,
                    quantity:g[i].dishes[1].quantities[0].quantity,
                    type:g[i].dishes[1].quantities[0].type,
                    overallFeedback:g[i].dishes[1].quantities[0].feedbacks[0].score+g[i].dishes[1].quantities[0].feedbacks[1].score+g[i].dishes[1].quantities[0].feedbacks[2].score/3, 
                    feedbacks:[
                        {
                            feedback1:g[i].dishes[1].quantities[0].feedbacks[0].description+":"+g[i].dishes[1].quantities[0].feedbacks[0].score

                        },
                        {
                            feedback2:g[i].dishes[1].quantities[0].feedbacks[1].description+":"+g[i].dishes[1].quantities[0].feedbacks[1].score

                        },
                        {
                            feedback3:g[i].dishes[1].quantities[0].feedbacks[2].description+":"+g[i].dishes[1].quantities[0].feedbacks[2].score

                        },
                    ]
                },
                {
                size:g[i].dishes[1].quantities[1].size,
                quantity:g[i].dishes[1].quantities[1].quantity,
                type:g[i].dishes[1].quantities[1].type,
                overallFeedback:g[i].dishes[1].quantities[1].feedbacks[0].score+g[i].dishes[1].quantities[1].feedbacks[1].score+g[i].dishes[1].quantities[1].feedbacks[2].score/3, 
                feedbacks:[
                    {
                        feedback1:g[i].dishes[1].quantities[1].feedbacks[1].description+":"+g[i].dishes[1].quantities[1].feedbacks[0].score

                    },
                    {
                        feedback2:g[i].dishes[1].quantities[1].feedbacks[1].description+":"+g[i].dishes[1].quantities[1].feedbacks[1].score

                    },
                    {
                        feedback3:g[i].dishes[1].quantities[1].feedbacks[2].description+":"+g[i].dishes[1].quantities[1].feedbacks[2].score

                    },
                ]
              },
              
            ],
        },
    ],

}
modifiedOrders.push(ordermodification);
}
return modifiedOrders;
}
console.log(modifyOrders());
