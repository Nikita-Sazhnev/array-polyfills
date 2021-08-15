// let new_array = arr.map(function callback( currentValue[, index[, array]]) {
//    Возвращает элемент для new_array
// }[, thisArg])

const arr = [1,2,3,4,5,6,7,8,9,0]

if(!Array.prototype.myMap) {
	Array.prototype.myMap = function (callback, thisArg) {
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
				res.push(callback.call(t, obj[i], i, obj))
		}

		return res
	}
}

const newArr = arr.myMap((item) =>  item * 2)
console.log(newArr)