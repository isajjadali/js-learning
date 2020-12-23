const user = {
    name: 'Sajjad',
    getName: function () {
        return this.name;
    }
}

console.log(user.getName(), 'user.getName()');   // => Sajjad

const printName = user.getName;

console.log(printName(), 'printName'); // => undefined

const printNameBinnedByUser = user.getName.bind(user);

console.log(printNameBinnedByUser(), 'printNameBinnedByUser()'); // => Sajjad
