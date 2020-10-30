

<!DOCTYPE HTML>
<html>
<head>
</head>
<style type="text/css">

	
	
	}
</style>
<script type="module">
	function person (a, b, c,d ){
		return { 
			name: 'alex',
			age: this.age
	}

	var egg = { age: 22}

	Function.prototype.newCall = function(obj) {
		var obj = obj || window;
		obj.p =this;
		var newArguments = [];
		for(let i = 1; i < arguments.length; i++) {
			newArguments.push('arguments[' + i + ']');
		}

		var result = eval('obj.p(' + newArguments + ')');
		delete obj.p;
		return  result
	}

	var alex2 = person.newCall(egg, 'fff', '232', '23sff', '2fs')
	console.log(alex2)


</script>
<body>
	<div>offf
	</div>
</body>
</html>
