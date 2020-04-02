function checkSureword() {
	var sureword = document.getElementById("sureword").value;
	if (sureword == "") { //为空
		document.getElementById("sureword1").innerHTML = "请输入验证码！";
		document.getElementById("sureword1").className = "error";
	} else {
		if (sureword !== "5187") {
			document.getElementById("sureword1").innerHTML = "输入的验证码错误！";
			document.getElementById("sureword1").className = "error";
		} else {
			document.getElementById("sureword1").innerHTML = "输入的验证码正确！";
			document.getElementById("sureword1").className = "right";
		}
	}
}

function checkArgeen() {
	var argeen = document.getElementById("argeen").checked;
	if (!argeen) {
		document.getElementById("argeen1").innerHTML = "请勾选！";
		document.getElementById("argeen1").className = "error";
	} else {
		document.getElementById("argeen1").innerHTML = "已勾选！";
		document.getElementById("argeen1").className = "right";
	}
}

function wancheng() {
	alert("完成注册，返回登录界面！");
	window.open("../Denglu/index.html");
}
