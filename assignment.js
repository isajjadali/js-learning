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
];

function getUserSubjects(userName) {
    return new Promise((resolve, reject) => {
        const userSubjects =subjects.filter(subject => subject.userName === userName);
        if (userSubjects.length) {
            return resolve(userSubjects);
        }
        reject(`No Project Found against userId `);
    });
}

getUserSubjects("sajjad")
.then((res)=>{
    user.subjects=res
   console.log(user);
}).catch(err=>{
    concole.log(err);
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
