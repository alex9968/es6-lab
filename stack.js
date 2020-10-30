function Stack() {
	this.items = []

	Stack.prototype.push = function (element) {
		this.items.push(element)
	}

	Stack.prototype.pop = function () {
		this.items.pop()
	}

	Stack.prototype.isEmpty = function() {
		return this.items.length == 0
	}
	Stack.prototype.size = function() {
		return this.items.length
	}
	Stack.prototype.toString = function(){
		var resultString
		for (var i = 0; i< this.items.length; i++){
			resultString += this.items[i] + ' '
		}
	}
}

var s = new Stack()
s.push(10)
s.push(20)
s.push(30)
s.push(40)
s.pop()


console.log(s)

