window.onload = function(){
	var arr1 = document.getElementsByName("area");
	var area = document.getElementById("area");
	for(var i = 0; i < arr1.length; i++){
		arr1[i].onclick =function(){
			area.value = this.innerText;
		}
	}
}