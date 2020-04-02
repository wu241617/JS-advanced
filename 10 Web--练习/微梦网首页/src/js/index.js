window.onload = function(){
	var aP = document.querySelectorAll("#tab p");
	var tabLi = document.querySelectorAll("#tab ul li");
	
	tabLi[1].onmouseenter = function() {
		aP[1].style.display = "block";
	}
	
	tabLi[1].onmouseleave = function() {
		aP[1].style.display = "none";
	}
}

