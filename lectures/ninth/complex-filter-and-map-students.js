let students = [
    {
        firstName: 'Sajjad',
        lastName: 'Ali',
        dateOfBirth: {
            month: 'june',
            day: 20,
            year: 1995,
        },
        subjects: [
            {
                name: 'math',
                marks: 80,
            },
            {
                name: 'english',
                marks: 70,
            },
            {
                name: 'urdu',
                marks: 33,
            },
        ],
    },
    {
        firstName: 'Ferasat',
        lastName: 'Ali',
        dateOfBirth: {
            month: 'december',
            day: 06,
            year: 2000,
        },
        subjects: [
            {
                name: 'math',
                marks: 90,
            },
            {
                name: 'english',
                marks: 80,
            },
            {
                name: 'urdu',
                marks: 83,
            },
        ],
    },
    {
        firstName: 'Hassan',
        lastName: 'Ali',
        dateOfBirth: {
            month: 'november',
            day: 5,
            year: 1998,
        },
        subjects: [
            {
                name: 'math',
                marks: 82,
            },
            {
                name: 'english',
                marks: 72,
            },
            {
                name: 'urdu',
                marks: 81,
            },
        ],
    },
    {
        firstName: 'Basit',
        lastName: 'Ali',
        dateOfBirth: {
            month: 'november',
            day: 26,
            year: 2000,
        },
        subjects: [
            {
                name: 'math',
                marks: 90,
            },
            {
                name: 'english',
                marks: 83,
            },
            {
                name: 'urdu',
                marks: 89,
            },
        ],
    }
];


// {
//     name: 'Basit Ali',
//         dateOfBirth: '26 november 2000',
//             subjects: {
//         math: 90,
//             english: 83,
//                 urdu: 89,
//     }
// }


let modifiedStudents = students.map((student) => {

    let filteredSubject = student.subjects.filter((subject) => subject.marks > 85);

    let obj = {};
    filteredSubject.forEach((subject) => {
        obj[subject.name] = subject.marks;
    });

    return {
        name: `${student.firstName} ${student.lastName}`,
        dateOfBirth: `${student.dateOfBirth.day} ${student.dateOfBirth.month} ${student.dateOfBirth.year}`,
        subjects: obj
    }
})


console.log(JSON.stringify(modifiedStudents, null, 2), 'modifiedStudents');
