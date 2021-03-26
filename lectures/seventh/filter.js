Array.prototype.filter1=function (callback){
    let array3=[];
    for (let i = 0; i < this.length; i++) {
      if(callback(this[i]))
       {array3.push(this[i]);}  
    }
    return array3;
}

let array = ['one' ,'two' ,'three' ,'four' ,'five'];

let array2=[];
array2=array.filter1(item => item.length>3);
console.log(array2);