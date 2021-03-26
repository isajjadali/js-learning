Array.prototype.some1=function (callback){

    for (let i = 0; i < this.length; i++) {
      if(callback(this[i])){
           return((this[i]));
        } 
      
    }
    return array3;
}

let array = ['one' ,'two' ,'three' ,'four' ,'five'];

let array2=[];
array2=array.some1(item => item.length>3);
console.log(array2);