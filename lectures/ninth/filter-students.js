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

let filteredStudentOnTheBasisOfMath = students.filter((student) => {
    return student.subjects
        .find((subject) => {
            return subject.name === 'math';
        })
        .marks > 82
});

console.log(filteredStudentOnTheBasisOfMath, 'filteredStudentOnTheBasisOfMath');
