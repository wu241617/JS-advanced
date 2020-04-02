

/* zhuce.html */
function checkUserName() {
	//1,获取用户名文本框的值
	var userName = document.getElementById("username").value;
	//2,根据输入框中值的判断，设置不同的提示内容 
	if (userName == "") { //为空
		//设置提示为"用户名不能为空"
		document.getElementById("username1").innerHTML = "请填写用户名!";
		//设置提示框样式为定义好的error
		document.getElementById("username1").className= "error";
	} else {
		if (userName.length < 6 || userName.length > 8) { //长度不符合要求
			//设置提示为"长度必须是6-8"
			document.getElementById("username1").innerHTML = "长度必须是6-8！";
			//设置提示框样式为定义好的error
			document.getElementById("username1").className = "error";
		} else { //长度符合要求
			if (!/^[a-zA-Z][a-zA-Z0-9]{5,7}$/.test(userName)) { //不是由数字和字母组成，第一个必须是字母
				//设置提示为"由数字和字母组成，第一个必须是字母"
				document.getElementById("username1").innerHTML = "由数字和字母组成，第一个必须是字母！";
				//设置提示框样式为定义好的error
				document.getElementById("username1").className = "error";
			} else { //用户名输入成功
				document.getElementById("username1").innerHTML = "用户名输入正确！";
				//设置提示框样式为定义好的right
				document.getElementById("username1").className = "right";
			}

		}
	}
}

function checkPassWord() {
	var passWord = document.getElementById("password").value;
	if (passWord == "") { //为空
		document.getElementById("password1").innerHTML = "请填写密码！";
		//设置提示框样式为定义好的error
		document.getElementById("password1").className = "error";
	} else { //不为空
		if (passWord < 12 || passWord > 18) { //长度不在12-18之间
			document.getElementById("password1").innerHTML = "长度必须是12-18位！";
			//设置提示框样式为定义好的error
			document.getElementById("password1").className = "error";
		} else { //长度在12-18之间
			if (!/^[a-zA-Z][a-zA-Z0-9]{11,17}$/.test(passWord)) { //不是由数字和字母组成，第一个必须是字母
				document.getElementById("password1").innerHTML = "不是由数字和字母组成，第一个必须是字母！";
				//设置提示框样式为定义好的error
				document.getElementById("password1").className = "error";
			} else { //密码输入成功
				document.getElementById("password1").innerHTML = "密码输入成功！";
				//设置提示框样式为定义好的right
				document.getElementById("password1").className = "right";
			}
		}
	}
}

function checkSure() {
	var passWord = document.getElementById("password").value;
	var passWord1 = document.getElementById("sure").value;
	if (passWord == passWord1 && passWord1 !== "") { //确认密码输入成功
		document.getElementById("sure1").innerHTML = "确认密码输入成功";
		//设置提示框样式为定义好的right
		document.getElementById("sure1").className = "right";
	} else { //确认密码输入不正确
		document.getElementById("sure1").innerHTML = "您两次填写的密码不一致，请重新填写！";
		//设置提示框样式为定义好的error
		document.getElementById("sure1").className = "error";
	}
}

function checkEmail() {
	var Email = document.getElementById("email").value;
	if (Email == "") { //为空
		document.getElementById("email1").innerHTML = "请填写E-mail地址！";
		//设置提示框样式为定义好的error
		document.getElementById("email1").className = "error";
	} else {
		if (Email.length < 6 || Email.length > 10) { //长度不符合
			document.getElementById("email1").innerHTML = "长度为6-10位！";
			//设置提示框样式为定义好的error
			document.getElementById("email1").className = "error";
		} else {
			if (!/^[a-zA-Z][a-zA-Z0-9]{5,9}$/.test(Email)) { //不是由数字和字母组成，第一个必须是字母
				document.getElementById("email1").innerHTML = "由数字和字母组成，第一个必须是字母!";
				//设置提示框样式为定义好的error
				document.getElementById("email1").className = "error";
			} else {
				document.getElementById("email1").innerHTML = "E-mail输入正确!";
				//设置提示框样式为定义好的right
				document.getElementById("email1").className = "right";
			}
		}
	}
}

function checkChoose() {
	var account1 = document.getElementById("accountType1").checked;
	var account2 = document.getElementById("accountType2").checked;
	if (!account1 && !account2) {
		document.getElementById("accountType").innerHTML = "请选择账户类型！";
		document.getElementById("accountType").className = "error";
	} else {
		document.getElementById("accountType").innerHTML = "账户类型选择正确！";
		document.getElementById("accountType").className = "right";
	}
}

/*
//定义省/直辖市数组
var arr_province = ["请选择省/直辖市", "北京市", "上海市", "广东省"];
//定义市/区二维数组
var arr_city = [
	["请选择市/区"],
	["东城区", "西城区", "朝阳区", "宣武区", "昌平区", "大兴区", "丰台区", "海淀区"],
	['宝山区', '长宁区', '丰贤区', '虹口区', '黄浦区', '青浦区', '南汇区', '徐汇区', '卢湾区'],
	['广州市', '惠州市', '汕头市', '珠海市', '佛山市', '中山市', '东莞市']
];

//初始化菜单
onload = function() {
	//获取对象
	var province = document.getElementById("province");
	var city = document.getElementById("city");
	//指定省option标记的个数
	province.length = arr_province.length;
	//数组数据写入<option>标记中
	for (var i = 0; i < arr_province.length; i++) {
		province.options[i].text = province.options[i].value = arr_province[i];
	}
	//设置省列表默认选项
	var index = 0;
	province.index = index;
	//指定城市option标记的个数
	city.length = arr_city[index].length;
	//数组数据写入option标记
	for (var j = 0; j < arr_city[index].length; j++) {
		city.options[j].text = city.options[j].value = arr_city[index][j];
	}
}

function alter(index) {
	//修改省列表的选择项
	province.index = index;
	//指定城市option标记的个数
	city.length = arr_city[index].length;
	//数组中的数据写入option标记
	for (var j = 0; j < arr_city[index].length; j++) {
		city.options[j].text = city.options[j].value = arr_city[index][j];
	}
}*/



function checkPeople() {
	var people = document.getElementById("people").value;
	if (people == "") { //为空
		document.getElementById("people1").innerHTML = "请输入联系人姓名！";
		document.getElementById("people1").className = "error";
	} else {
		document.getElementById("people1").innerHTML = "联系人姓名已输入！";
		document.getElementById("people1").className = "right";
	}
}

function checkQQ() {
	var qq = document.getElementById("QQ").value;
	if (qq == "") { //为空
		document.getElementById("QQ1").innerHTML = "请填写QQ帐号！";
		//设置提示框样式为定义好的error
		document.getElementById("QQ1").className = "error";
	} else { //不为空
		if (qq.length < 5 || qq.length > 10) { //长度不在5-10之间
			document.getElementById("QQ1").innerHTML = "长度必须是5-10位，由数字组成！";
			//设置提示框样式为定义好的error
			document.getElementById("QQ1").className = "error";
		} else { //长度在5-10之间
			if (!/^[0-9]{5,10}$/.test(qq)) { //不全部由数字组成
				document.getElementById("QQ1").innerHTML = "由数字组成！";
				//设置提示框样式为定义好的error
				document.getElementById("QQ1").className = "error";
			} else { //qq号输入成功
				document.getElementById("QQ1").innerHTML = "QQ帐号输入正确！";
				//设置提示框样式为定义好的right
				document.getElementById("QQ1").className = "right";
			}
		}
	}
}

function checkCall() {
	var call = document.getElementById("call").value;
	if (call == "") { //为空
		document.getElementById("call1").innerHTML = "请填写手机号码！";
		//设置提示框样式为定义好的error
		document.getElementById("call1").className = "error";
	} else { //不为空
		if (call.length !== 11) { //长度不等于11位
			document.getElementById("call1").innerHTML = "长度必须为11位！";
			//设置提示框样式为定义好的error
			document.getElementById("call1").className = "error";
		} else { //长度是11位
			if (!/^[1][0-9]{10}$/.test(call)) { //不全部由数字组成
				document.getElementById("call1").innerHTML = "由数字组成,第一位数字为1！";
				//设置提示框样式为定义好的error
				document.getElementById("call1").className = "error";
			} else { //手机号输入成功
				document.getElementById("call1").innerHTML = "手机号码输入正确！";
				//设置提示框样式为定义好的right
				document.getElementById("call1").className = "right";
			}
		}
	}
}

/*zhuce.html-->right-body*/
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
	window.open("denglu.html");
}


/* denglu.html */
function checkAccount(){
	var account = document.getElementById("denglu-account").value;
	if(account==""){//为空
		document.getElementById("denglu-account1").innerHTML = "请输入账号！";
		document.getElementById("denglu-account1").className = "error"; 
	}
	else{
		document.getElementById("denglu-account1").innerHTML = "账号已输入！";
		document.getElementById("denglu-account1").className = "right";
	}
}

function checkPassword(){
	var password = document.getElementById("denglu-password").value;
	if(password==""){//为空
	    document.getElementById("denglu-password1").innerHTML = "请输入密码！";
		document.getElementById("denglu-password1").className = "error"; 
	}
	else{
		document.getElementById("denglu-password1").innerHTML = "密码已输入！";
		document.getElementById("denglu-password1").className = "right";
	}
}
function checkDenglu(){
	alert("确定登录！");
	window.open("index.html");
}

function checkExit(){
	alert("确定退出");
	window.close();
}


window.onload = function() {
	
	function showNum(num){
		if(num > 9){
			return num;
		}else{
			return "0" + num;
		}
	}
	/* index.html */
	var showDate = function(){
		var d = new Date();
		var Year = d.getFullYear();
		var Month = d.getMonth() + 1;
		var date = d.getDate();
		var day = d.getDay();
		if(day > 6){
			day = "日";
		}
		var hours = d.getHours();
		var minutes = d.getMinutes();
		var seconds = d.getSeconds();
		var str = Year + "年" + Month + "月" +date + "日" + "  星期" + day + "  " + showNum(hours) + "时" + showNum(minutes) +"分"+showNum(seconds)+"秒";
	    document.getElementById("index-div0").innerHTML = str;
		//alert(str);
	}
	setInterval(showDate,1000);
	
	
	/* 轮播图-1 */
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
		pic.style.top = -curindex * 200 + "px";
		index = curindex;
	}
	
}