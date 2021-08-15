//arr.filter(callback(element[, index, [array]])[, thisArg])

const arr = [1,2,3,4,5,6,7,8,9,0]

if(!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (callback, thisArg) {
    if (this == null) {
      throw new TypeError();
    } 
    else if (typeof callback !== 'function') {
      throw new TypeError();
    }

    let obj = Object(this)
    let len = obj.length
    const res = []
    
    let t = this
    if (arguments.length > 1) {
      t = thisArg;
    }
    
    for (let i = 0; i < len; i++) {
      if(i in obj)
      	if(callback.call(t, obj[i], i, obj)) {
      		res.push(obj[i])
      }
    }

    return res
  }
}

const newArr = arr.myFilter((item) =>  item % 2 === 0)
console.log(newArr)