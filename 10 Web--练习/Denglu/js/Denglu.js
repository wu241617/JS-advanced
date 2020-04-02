function checkAccount(){
	var account = document.getElementById("account").value;
	if(account==""){//为空
		document.getElementById("account1").innerHTML = "请输入账号！";
		document.getElementById("account1").className = "error"; 
	}
	else{
		document.getElementById("account1").innerHTML = "账号已输入！";
		document.getElementById("account1").className = "right";
	}
}

function checkPassword(){
	var password = document.getElementById("password").value;
	if(password==""){//为空
	    document.getElementById("password1").innerHTML = "请输入密码！";
		document.getElementById("password1").className = "error"; 
	}
	else{
		document.getElementById("password1").innerHTML = "密码已输入！";
		document.getElementById("password1").className = "right";
	}
}
function checkDenglu(){
	alert("确定登录！");
	window.open("../Test2/index.html");
}

function checkExit(){
	alert("确定退出");
	window.close();
}