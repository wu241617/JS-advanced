define(function(){
	var PI = 3.1415926;
	
	function multiple(num1,num2){
		return num1 * num2;
	}
	
	function square(n){
		return n * n;
	}
	
	return{
		PI:PI,
		multiple:multiple,
		square:square
	}
})