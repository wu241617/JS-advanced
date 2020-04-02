window.onload = function() {
	var wrap = document.getElementById("wrap");
	pic = document.getElementById("pic");
	list = document.getElementById("list").getElementsByTagName("li");
	index = 0;
	timer = null;

	if (timer) {
		clearInterval(timer);
		timer = null;
	}
	timer = setInterval(autoplay, 1000);

	function autoplay() {
		index++;
		if (index >= list.length) {
			index = 0;
		}
		changeoptions(index);
	}

	wrap.onmouseover = function() {
		clearInterval(timer);
	}

	wrap.onmouseout = function() {
		timer = setInterval(autoplay, 2000);
	}
	for (var i = 0; i < list.length; i++) {
		list[i].id = i;
		list[i].onmouseover = function() {
			clearInterval(timer);
			changeoptions(this.id);
		}
	}

	function changeoptions(curindex) {
		for (var j = 0; j < list.length; j++) {
			list[j].className = "";
			pic.style.top = 0;
		}
		list[curindex].className = "active";
		pic.style.top = -curindex * 400 + "px";
		index = curindex;
	}
}
