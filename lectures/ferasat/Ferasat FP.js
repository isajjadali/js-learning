class user {
    constructor(id,firstName,lastName,dateOfBirth,address,rating,) {
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.dateOfBirth=dateOfBirth;
        this.address=address;
        this.rating=rating;
    }
}
class order {
    constructor(id,userId,orderType,price,dishes) {
        this.id=id;
        this.userId=userId;
        this.orderType=orderType,
        this.orderTime=new Date().toLocaleTimeString();
        this.price=price;
        this.dishes=dishes;
    }
}
/* making objects of the using class*/
let u1  = new user(1,'ferasat','ali',{ day: 20,year: 1995,month: 6,},[ 
         { 
             street: 'garhi shahu',
             houseNo: 2,
             city: 'lahore',
         },
         {
             street: 'garhi shahu',
            houseNo: 2,
             city: 'lahore',
         } ],
        [ 
         {   
             description: 'it should be a string always',
             score: 5, // in between 1 to 5
            },
            {
                 description: 'it should be a string always',
                 score: 5, // in between 1 to 5
             },
         ])
let u2 = new user(2,'basit','ali',{ day: 20,year: 1995,month: 6,},[ 
    { 
        street: 'garhi shahu',
        houseNo: 2,
        city: 'lahore',
    },
    {
        street: 'garhi shahu',
       houseNo: 2,
        city: 'lahore',
    } ],
   [ 
    {    description: 'it should be a string always',
        score: 5, // in between 1 to 5
       },
       {
            description: 'it should be a string always',
            score: 5, // in between 1 to 5
        },
    ])
 let o1=new order(1,23,'dine in',{
    beforeDiscount: 200,
    discount: 15,  // it actually in percentage that means it is 15%
    afterDiscount: 160,
    tax: 10, // it actually in percentage that means it is 10%
    totalPrice: 176,
}, [
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
]);
 let o2=new order(2,34,'take away',{
    beforeDiscount: 200,
    discount: 15,  // it actually in percentage that means it is 15%
    afterDiscount: 160,
    tax: 10, // it actually in percentage that means it is 10%
    totalPrice: 176,
}, [
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
]);
// /* task 2 3 part of making promise and returnig objects according to the condtion */ 
let usersPromise = function makingPromiseOfUsers() {
    return new Promise((resolve,reject) => {
         resolve([u1,u2]);
         reject('The resolve do not work prpperly ');
    })
}
let ordersPromise = function makingPromiseOFOrders() {
    return new Promise((resolve,reject) => {
        resolve([o1,o2]);
     reject('The resolve do not work prpperly ');
    })
}
let checkingAfterGivingUserID= function check(idOfUser,arrayOfOrders) {
    return new Promise ((resolve,reject)=> {
     let check = arrayOfOrders.filter(arrayOfOrders => arrayOfOrders.userId === idOfUser)
    if(check.length>0)
        return resolve(check)
    return reject(` THe ${idOfUser} dont hold any records `) 
})
}
let filterOrders=[o1,o2]
 usersPromise()
.then(result => {
     console.log(result)
    console.log(result,'The result of the user')
})
.catch(result=>{
    console.log(result,)
})

ordersPromise()
.then(result => {
    console.log(result,'The result of the order')
 return checkingAfterGivingUserID(34,result)

})
.then(result=> {
    console.log(result,' filter according to the userId')
})
.catch(result=>{
    console.log(result)
})

/* the closure part task 4*/

function closurefunction () {
    return  ((id) => {
let tell = filterOrders.filter(filterOrders=> id===filterOrders.id)
if(tell.length>0)
return tell;
return `no order found against this id ${id}`
    })
}
let useOfClosureFunction=closurefunction();
console.log(useOfClosureFunction(2)) 

/*  Modifying objects */

// users modifier ...
let curYear=2021
function modifyUsers(comingObjects) { 
    let avg
    for(let i=0;i <2;i++)
     avg = comingObjects.rating[i].score
    avg /= 2
return {
    id:comingObjects.id,
    name:comingObjects.firstName+comingObjects.lastName, 
    age : curYear - comingObjects.dateOfBirth.year ,
    address: 
    [ 
        {
            desciption: comingObjects.address[0].houseNo + ',' + comingObjects.address[0].street + ',' +comingObjects.address[0].city 
        },
        {
            desciption: comingObjects.address[1].houseNo + ',' + comingObjects.address[1].street + ',' +comingObjects.address[1].city 
        } 
    ]
    ,
    rating : [ 
        {
           l : ` ${comingObjects.rating[0].score} : ${comingObjects.rating[0].description} `    
        },
      { 
         l : ` ${comingObjects.rating[1].score} : ${comingObjects.rating[1].description} `  
      } 
    ]
    , 
    overallRating : avg ,
}
    }
 console.log(modifyUsers(JSON.parse(JSON.stringify(u1))))
 console.log(modifyUsers(JSON.parse(JSON.stringify(u2))))

 // objects modifier ...
function modifyOrders(comingObject) {
    let a1,a2,a3,a4
    for(let i=0;i < 3;i++) {
       a1 = comingObject.dishes[0].quantities[0].feedbacks[i].score + a1
       a2 = comingObject.dishes[0].quantities[1].feedbacks[i].score + a2
       a3 = comingObject.dishes[1].quantities[0].feedbacks[i].score + a3
       a4 = comingObject.dishes[1].quantities[1].feedbacks[i].score + a4
    }
a1 /= 3 ; a2 /= 3  ;a3 /= 3 ; a4 /= 3 
    return {
        id :comingObject.id,
        userId:comingObject.userId,
        orderType:comingObject.orderType,
        orderTime:comingObject.orderTime,
        price:comingObject.price.totalPrice,
dishes : [ 
 {
     id: comingObject.dishes[0].id,
     name :comingObject.dishes[0].name,
    quantities: [
        {
            size:comingObject.dishes[0].quantities[0].size,   
            quantity:comingObject.dishes[0].quantities[0].quantity,
            type:comingObject.dishes[0].quantities[0].type,
            overallFeedback:  a1,
            feedback: [
                {
                    l: ` ${comingObject.dishes[0].quantities[0].feedbacks[0].desciption} : ${comingObject.dishes[0].quantities[0].feedbacks[0].score}`
                },
                {
                    l: ` ${comingObject.dishes[0].quantities[0].feedbacks[2].desciption} : ${comingObject.dishes[0].quantities[0].feedbacks[1].score}`
                },
                {
                    l: ` ${comingObject.dishes[0].quantities[0].feedbacks[2].desciption} : ${comingObject.dishes[0].quantities[0].feedbacks[2].score}`
                },
            ]

        },
        {
            size:comingObject.dishes[0].quantities[1].size,   
            quantity:comingObject.dishes[0].quantities[1].quantity,
            type:comingObject.dishes[0].quantities[1].type,
            overallFeedback:  a2 ,
            feedback: [
                {
                    l: ` ${comingObject.dishes[0].quantities[1].feedbacks[0].desciption} : ${comingObject.dishes[0].quantities[1].feedbacks[0].score}`
                },
                {
                    l: ` ${comingObject.dishes[0].quantities[1].feedbacks[2].desciption} : ${comingObject.dishes[0].quantities[1].feedbacks[1].score}`
                },
                {
                    l: ` ${comingObject.dishes[0].quantities[1].feedbacks[2].desciption} : ${comingObject.dishes[0].quantities[1].feedbacks[2].score}`
                },
            ]
        }
    ]
 },
 {
    id: comingObject.dishes[1].id,
    name :comingObject.dishes[1].name,
    quantities: [
        {
            size:comingObject.dishes[1].quantities[0].size,   
            quantity:comingObject.dishes[1].quantities[0].quantity,
            type:comingObject.dishes[1].quantities[0].type,
            overallFeedback:  a3 ,
            feedback: [
                {
                    l: ` ${comingObject.dishes[1].quantities[0].feedbacks[0].desciption} : ${comingObject.dishes[1].quantities[0].feedbacks[0].score}`
                },
                {
                    l: ` ${comingObject.dishes[1].quantities[0].feedbacks[2].desciption} : ${comingObject.dishes[1].quantities[0].feedbacks[1].score}`
                },
                {
                    l: ` ${comingObject.dishes[1].quantities[0].feedbacks[2].desciption} : ${comingObject.dishes[1].quantities[0].feedbacks[2].score}`
                },
            ]

        },
        {
            size:comingObject.dishes[1].quantities[1].size,   
            quantity:comingObject.dishes[1].quantities[1].quantity,
            type:comingObject.dishes[1].quantities[1].type,
            overallFeedback:  a4 ,
            feedback: [
                {
                    l: ` ${comingObject.dishes[1].quantities[1].feedbacks[0].desciption} : ${comingObject.dishes[1].quantities[1].feedbacks[0].score}`
                },
                {
                    l: ` ${comingObject.dishes[1].quantities[1].feedbacks[2].desciption} : ${comingObject.dishes[1].quantities[1].feedbacks[1].score}`
                },
                {
                    l: ` ${comingObject.dishes[1].quantities[1].feedbacks[2].desciption} : ${comingObject.dishes[1].quantities[1].feedbacks[2].score}`
                },
            ]
        }
    ]
 }   
]
    }
}

console.log(modifyOrders(JSON.parse(JSON.stringify(o1))))
console.log(modifyOrders(JSON.parse(JSON.stringify(o2))))

/* After adding the Function */

user.prototype.getUserAge = function () {
    return curYear - this.dateOfBirth.year;
  };
  user.prototype.getUserRating = function () {
    return this.ratings;
  };
  user.prototype.getUserAddress = function () {
    return this.address;
  };
  user.prototype.getUserName = function () {
    return this.firstName +' ' +this.lastName;
  };
let x = new user(1,'ferasat','ali',{ day: 20,year: 1995,month: 6,},[ 
    { 
        street: 'garhi shahu',
        houseNo: 2,
        city: 'lahore',
    },
    {
        street: 'garhi shahu',
       houseNo: 2,
        city: 'lahore',
    } ],
   [ 
    {    description: 'it should be a string always',
        score: 5, // in between 1 to 5
       },
       {
            description: 'it should be a string always',
            score: 5, // in between 1 to 5
        },
    ])
    console.log('Name :',x.getUserName())
    console.log('Age :',x.getUserAge())
    console.log('Address :' ,x.getUserAddress())
    console.log('Rating :',x.getUserRating())

 
