const users = [
    {
        id: 1,
        name: 'Sajjad'
    }, {
        id: 2,
        name: 'ali'
    },
    {
        id: 3,
        name: 'umair'
    }
];

const userProjects = [
    {
        userId: 1,
        projectName: 'a'
    },
    {
        userId: 1,
        projectName: 'b'
    },
    {
        userId: 2,
        projectName: 'a'
    }
];

function getUser(id) {
    return new Promise((resolve, reject) => {
        const user = users.find(obj => obj.id === id);
        if (user) {
            return resolve(user);
        }
        reject('No user Found!');
    });
}

function getUserProjects(userId) {
    return new Promise((resolve, reject) => {
        const projects = userProjects.filter(project => project.userId === userId);
        if (projects.length) {
            return resolve(projects);
        }
        reject(`No Project Found against userId => ${userId}`);
    });
}


async function x() {
    getUser(1)
        .then((res) => {
            console.log(res, 'res');
            return getUserProjects(4);
        })
        .then((resp) => {
            console.log(resp, 'resp');
        })
        .catch(err => {
            console.log(err, 'err');
        })

    console.log(12);

    let y = await getUser(1);

    console.log(y, 'y');
}

x();



