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


 let modifiedStudents = students.filter((student) => {
   let index;
    
      let filteredSubject = students.filter((subjects => Object.keys(subjects)));
//      let obj = {};
//  filteredSubject.forEach((subject) => {
//       obj[subject.name] = subject;
//      });

      return {
        subjects: filteredSubject
    
     }
 })
// console.log(JSON.stringify(modifiedStudents, null, 2));
 console.log(modifiedStudents);