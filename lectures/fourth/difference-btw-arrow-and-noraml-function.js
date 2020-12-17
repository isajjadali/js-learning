this.x = 5;

function sum() {
    this.x = 20;
    console.log('result of sum', this.x); // create it's own object of this
}

let sumWithArrow = () => {
    this.x = { a: 40 };
    console.log('result of sumWithArrow', this.x);  // update the global object of this 
}

sum();
sumWithArrow();

console.log('result of this', this.x) // global object of this is updated by sumWithArrow function
