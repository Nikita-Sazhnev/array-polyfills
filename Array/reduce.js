
arr = [4, 12, 31.24, 12, 0, 4, false, 23, -4, 20, 0, 4, 34, '=', 58, 0,8, 58,]

if(!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (callback, inititalValue) {
    if (this == null) {
      throw new TypeError();
    } 
    else if (typeof callback !== 'function') {
      throw new TypeError();
    }
    let obj = Object(this)
    let len = obj.length
    let res = []
    let i = 0
    
    let t = this
    if (arguments.length >= 2) {
      res = inititalValue;
    } else {
      res = obj[i]
      i++
      if(len === 0) {
        throw new Error('')
      }
    }
    
    for (; i < len; i++) {
      if(i in obj)
        res = callback(res, obj[i], i, obj)
    }

    return res
  }
}

console.log(arr.myReduce((acc, val) => val === 0 ? [val, ...acc] : [...acc, val], []))