// arr.forEach(function callback(currentValue, index, array) {
//     //your iterator
// }[, thisArg]);

const arr = [1,2,3,4,5,6,7,8,9,0]
arr[100] = 101

if(!Array.prototype.myForEach) {
	Array.prototype.myForEach = function (callback, thisArg) {
		if (this == null) {
      throw new TypeError();
    } 
    else if (typeof callback !== 'function') {
      throw new TypeError();
    }

    let obj = Object(this)
    let len = obj.length
    
    let t = this
    if (arguments.length > 1) {
      t = thisArg;
    }

    let i = 0
    while (i < len) {
    	if(i in obj)
    		callback.call(t, obj[i], i, obj)

    	i++
    }
	}
}

arr.myForEach((item, index, array) => {
	console.log(index, item)
	console.log(array)
})