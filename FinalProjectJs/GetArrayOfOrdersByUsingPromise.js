class orders{
    constructor(id,userId,orderType,orderTime,price,dishes){
        this.id=id;
        this.userId=userId;
        this.orderType=orderType;
        this.orderTime=orderTime;
        this.price=price;
        this.dishes=dishes;
    }
}


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




// let m=new orders(g[0].id,g[0].userId,g[0].orderType,g[0].orderTime,g[0].price,g[0].dishes);
// let n=new orders(g[1].id,g[1].userId,g[1].orderType,g[1].orderTime,g[1].price,g[1].dishes);
// let o=new orders(g[2].id,g[2].userId,g[2].orderType,g[2].orderTime,g[2].price,g[2].dishes);
let m=[];
for(let i=0;i<g.length;i++){
        m[i]=new orders(g[i].id,g[i].userId,g[i].orderType,g[i].orderTime,g[i].price,g[i].dishes);
    }
    
    //==============>                       GET ARRAY OF ORDERS BY USING PROMISE    <==============//

function getNumOfOrders(){
    return new Promise((res,rej)=>{
       return res(m);
    })
   }
   getNumOfOrders(m)
   .then(res=>{
       console.log(res);
   })
   .catch(err=>{
       console.log(err);
   })