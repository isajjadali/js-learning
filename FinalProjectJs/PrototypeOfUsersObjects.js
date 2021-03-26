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

let v=new users(x[0].id,x[0].firstName,x[0].lastName,x[0].dateOfBirth,x[0].address,x[0].ratings);
let s=new users(x[1].id,x[1].firstName,x[1].lastName,x[1].dateOfBirth,x[1].address,x[1].ratings);
let t=new users(x[1].id,x[2].firstName,x[2].lastName,x[2].dateOfBirth,x[2].address,x[2].ratings);
//=============>            PROTOTYPE OF USERS OBJECTS       <==============//


users.prototype.getUserName=function(){
    return this.firstName+" "+this.lastName;
}
console.log(v.getUserName());
console.log(s.getUserName());
console.log(t.getUserName());

users.prototype.getUserAge=function(){
    return this.dateOfBirth;
}
console.log(v.getUserAge());
console.log(s.getUserAge());
console.log(t.getUserAge());

users.prototype.getUserAddress=function(){
    return this.address;
}
console.log(v.getUserAddress());
console.log(s.getUserAddress());
console.log(t.getUserAddress());


users.prototype.getUserRating=function(){
    return this.ratings;
}
console.log(v.getUserRating());
console.log(s.getUserRating());
console.log(t.getUserRating());