define(["math.js"],function(m1){
	
	function cricle(r){
		return m1.multiple(m1.PI,m1.square(r));
	}
	
	function area(a){
		return m1.square(a);
	}
	
	return{
		s_cricle:cricle,
		s_area:area
	}
	
	
})