let students = [
    {
        subjects: [
            {
                math: 80
            },
            {
                english: 33
            },
            {
                urdu: 75
            },
            {
                computer: 90
            }
        ],
        attendences: [
            {
                monday: 'present'
            },
            {
                tuesday: 'absent'
            },
            {
                wednesday: 'present'
            },
            {
                thursday: 'present'
            },
            {
                thursday: 'present'
            },
            {
                thursday: 'present'
            },
            {
                thursday: 'present'
            },
            {
                thursday: 'present'
            }
        ],
    },
    {
        subjects: [
            {
                math: 80
            },
            {
                english: 33
            },
            {
                urdu: 75
            },
            {
                computer: 90
            }
        ],
        attendences: [
            {
                monday: 'present'
            },
            {
                tuesday: 'absent'
            },
            {
                wednesday: 'present'
            },
            {
                thursday: 'present'
            },
            {
                thursday: 'present'
            },
            {
                thursday: 'present'
            },
            {
                thursday: 'present'
            },
            {
                thursday: 'present'
            }
        ],
    },
    {
        subjects: [
            {
                math: 80
            },
            {
                english: 32
            },
            {
                urdu: 75
            },
            {
                computer: 90
            }
        ],
        attendences: [
            {
                monday: 'present'
            },
            {
                tuesday: 'absent'
            },
            {
                wednesday: 'present'
            },
            {
                thursday: 'present'
            },
            {
                friday: 'present'
            },
            {
                thursday: 'present'
            },
            {
                thursday: 'present'
            },
            {
                thursday: 'present'
            }
        ],
    },
    {
        subjects: [
            {
                math: 90
            },
            {
                english: 80
            },
            {
                urdu: 85
            },
            {
                computer: 95
            }
        ],
        attendences: [
            {
                monday: 'absent'
            },
            {
                tuesday: 'present'
            },
            {
                wednesday: 'absent'
            },
            {
                thursday: 'present'
            },
            {
                thursday: 'absent'
            },
            {
                thursday: 'absent'
            },
            {
                thursday: 'absent'
            },
            {
                thursday: 'absent'
            }
        ],
    }
];


// write a function that takes 'pass' or 'fail' as parameters and return students

// Conditions
// check that his marks in every subject is greater than 33
// check that his attendences percentage is greater than equal to 50


// Hints
// get keys of object => Object.keys(obj);

function getStudents(param = 'pass') {
    if (param === 'pass') {
        return students.filter(student => {
            return student.subjects.every(subject => {
                return subject[Object.keys(subject)[0]] >= 33;
                // return Object.values(subject)[0] > 33
            })
                && ((student.attendences.filter(attendence => Object.values(attendence)[0] === 'present').length / student.attendences.length) * 100) >= 50
        });
    }
    return students.filter(student => {
        return student.subjects.some(subject => {
            return subject[Object.keys(subject)[0]] < 33;
            // return Object.values(subject)[0] > 33
        })
            || ((student.attendences.filter(attendence => Object.values(attendence)[0] === 'present').length / student.attendences.length) * 100) < 50
    });
}


console.log('<<<<<--------------Start-------------------->>>>>');
console.log(getStudents('fail'));
console.log('<<<<<---------------End--------------------->>>>>');
