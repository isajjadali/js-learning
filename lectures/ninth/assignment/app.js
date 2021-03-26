




//WITH LOOP--------START-----------------//

// let obj={};
// function factorial(x){
//     let Number=1;
//   return(x)=> //{if(Object.keys(obj)===x)return obj[x];
//      {for (let i=1;i<=x;i++){Number*=i;}
//  obj[x]=Number;
//     return obj;
//     }
    
// }
// console.log(factorial(5)(9));
// console.log(factorial(9)());
// console.log(factorial(4)());

//---------------END-------------------------//

//WITH RECURRSION IN CLOSURE--------------START-----------//
  let obj={};  
function factorial(x){
console.log(obj[x]=x);
  return function fact(y){ if(y<2) return y;
 let val= y*fact(y-1);
  obj[y]=val;
   return obj;
   }
}
console.log(factorial(3)(3));
console.log(factorial(0)(6));
console.log(factorial(0)(7));
console.log(factorial(0)(3));

//-------------------END-------------------//
