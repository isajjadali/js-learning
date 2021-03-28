const user = {
    id: 1,
    name: 'sajjad',
    dateOfBirth: '20 june 1995',
}

const subjects = [
    {
        userName: 'sajjad',
        name: 'math',
        score: 2,
    },
    {
        userName: 'ali',
        name: 'english',
        score: 5,
    },
    {
        userName: 'sajjad',
        name: 'urdu',
        score: 9,
    }
]
 function getUser(id) {
     return new Promise((resolve,reject) => { 
       const check = user.id === id
        if (check) {
            return resolve(user);
        }
        reject('No user found again this id....!!');
     })
    }
    /* The function with filter ... */ 
    function getUserSubjects(name ) {
        return new Promise((resolve,reject) => {
          let check1 = subjects.filter(subjects => subjects.userName === name )
          if(check1.length)
            return resolve(check1)
            return reject (" NO record of subject found again this name ..!!") 
        }     
        )
    }
    /* The function without filter ... */ 
    function getUserSubjects(name ) {
        return new Promise((resolve,reject) => {
            let returningArray=[]; 
            let check=false; 
            let counter=0;
            for(let i=0;i <subjects.length;i++) {
                if(subjects[i].userName === name) {
                    returningArray[counter++] = subjects[i]; 
                    check=true;
                }
            }
            // return resolve(` Subjects : [  ${object} ]`)
            if(check)
            return resolve(returningArray)
            return reject (" NO record of subject found again this name ..!!") 
        }     
        )
    }
     getUser(1)
     .then((res) => {
         console.log(res, 'res');
          return getUserSubjects(user.name); 
     })
     .then((res) => {
        console.log('Subjects :',res, );
    })
    .catch(result => {
        console.log(result) 
    })  
// {
//     id:1,
//     name: 'sajjad',
//     dateOfBirth: '20 june 1995',
//     subjects: [
//         {
//             userName: 'sajjad',
//             name: 'math',
//             score: 2,
//         },
//         {
//             userName: 'sajjad',
//             name: 'urdu',
//             score: 9,
//         }
//     ]
// }
