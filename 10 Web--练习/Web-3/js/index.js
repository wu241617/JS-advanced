window.onload = function() {
	//用户名验证
	var username = document.getElementById("username");
	var username1 = document.getElementById("username1");

	username.onblur = function() {
		if (username.value == "") {
			username1.innerHTML = " * 用户名不能为空!";
			username1.style.color = "red";
		} else {
			var reg = /^[0-9]{11}$/
			if (reg.test(username.value)) {
				username1.innerHTML = " * 用户名格式正确!"
				username1.style.color = "green";
			} else {
				username1.innerHTML = " * 用户名格式错误,请重新填写!"
				username1.style.color = "red";
			}
		}
	}

	//密码验证
	var password = document.getElementById("password");
	var password1 = document.getElementById("password1");
	password.onblur = function() {
		if (password.value == "") {
			password1.innerHTML = " * 密码不能为空!";
			password1.style.color = "red";
		} else {
			var reg = /^[0-9A-Za-z]{8,16}$/;
			if (reg.test(password.value)) {
				password1.innerHTML = " * 密码格式正确!"
				password1.style.color = "green";
			} else {
				password1.innerHTML = " * 密码格式错误,请重新输入!"
				password1.style.color = "red";
			}
		}
	}

	//姓名验证
	var name = document.getElementById("name");
	var name1 = document.getElementById("name1");
	name.onblur = function() {
		if (name.value == "") {
			name1.innerHTML = " * 请填写您的真实姓名!";
			name1.style.color = "red";
		} else {
			name1.innerHTML = " * 姓名输入正确!";
			name1.style.color = "green";
		}
	}

	//年龄验证
	var age = document.getElementById("age");
	var age1 = document.getElementById("age1");
	age.onblur = function() {
		if (age.value == "") {
			age1.innerHTML = " * 请输入您的年龄!";
			age1.style.color = "red";
		} else {
			age1.innerHTML = " * 年龄填写成功!";
			age1.style.color = "green";
		}
	}

	//服务同意勾选
	var sure = document.getElementById("sure");
	var sure1 = document.getElementById("sure1");
	sure.onclick = function() {
		if (sure.checked == false) {
			sure1.innerHTML = " * 请勾选!"
			sure1.style.color = "red";
		} else {
			sure1.innerHTML = " * 已勾选!"
			sure1.style.color = "green";
		}

	}
	
	//性别勾选
	var male = document.getElementById("male");
	var female = document.getElementById("female");
	var sex = document.getElementById("sex");
	male.onclick = function(){
		if (male.checked || male.checked) {
			sex.innerHTML = " * 已勾选!";
			sex.style.color = "green";
		} else {
		
			sex.innerHTML = " * 请选择您的性别!";
			sex.style.color = "red";
		}
	}
	
	//按钮
	var oBtn = document.getElementById("submit");
	oBtn.onclick = function(){
		confirm("是否确定注册!");
	}
}
