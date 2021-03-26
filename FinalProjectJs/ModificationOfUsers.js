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

//=============>             MODIFICATION OF USER         <==============//

let modifiedUser=[];
function modifyuser(){ 
    for(let i=0;i<x.length;i++){    
    
        UserModification=  {
        id:x[i].id,
        name:x[i].firstName+" "+x[i].lastName,
        age:2021-x[i].dateOfBirth.year,
        address:[
            {
                description:x[i].address[0].street+" "+x[i].address[0].houseNo+" "+x[i].address[0].city
            },
            {
                description:x[i].address[1].street+" "+x[i].address[1].houseNo+" "+x[i].address[1].city
            },
        ],
       
         ratings:[
                {
                 rating:x[i].ratings[0].score+" "+x[i].ratings[0].description
                },
                {
                 rating:x[i].ratings[1].score+" "+x[i].ratings[1].description
                },
        ],
        Rating:x[i].ratings[0].score+x[i].ratings[1].score/2,
        }
    
       modifiedUser.push(UserModification);
    }
    return modifiedUser;
}
console.log(modifyuser());