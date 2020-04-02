window.onload = function() {
	var aInput = document.querySelectorAll("input");
	var aP = document.querySelectorAll("p");
	var aLabel = document.querySelectorAll("label");
	var aSelect = document.querySelectorAll("select");
	var aButton = document.querySelectorAll("button");

	//商品货号
	aInput[0].onblur = function() {
		if (aInput[0].value == "") {
			aP[0].innerHTML = "商品货号不能为空!";
			aP[0].style.color = "red";
			aLabel[0].style.color = "red";
			aInput[0].style.borderColor = "red";
		} else {
			aP[0].innerHTML = "商品货号输入正确!";
			aP[0].style.color = "green";
			aLabel[0].style.color = "black";
			aInput[0].style.borderColor = "darkgray";
		}
	}

	//条形码
	aInput[1].onblur = function() {
		if (aInput[1].value == "") {
			aP[1].innerHTML = "条形码不能为空!";
			aP[1].style.color = "red";
			aLabel[1].style.color = "red";
			aInput[1].style.borderColor = "red";
		} else {
			aP[1].innerHTML = "条形码输入正确!";
			aP[1].style.color = "green";
			aLabel[1].style.color = "black";
			aInput[1].style.borderColor = "darkgray";
		}
	}

	//商品中文名称
	aInput[2].onblur = function() {
		if (aInput[2].value == "") {
			aP[2].innerHTML = "商品中文名称不能为空!";
			aP[2].style.color = "red";
			aLabel[2].style.color = "red";
			aInput[2].style.borderColor = "red";
		} else {
			aP[2].innerHTML = "商品中文名称输入正确!";
			aP[2].style.color = "green";
			aLabel[2].style.color = "black";
			aInput[2].style.borderColor = "darkgray";
		}
	}

	//产地

	//下拉框默认选中 -->selected
	//单选下拉列表框对象的value属性值就是选中项的value值
	//var selected_val = document.getElementById(select_id).value;
	//或者
	//var sel = document.getElementById(select_id);
	//var selected_val = sel.options[sel.selectedIndex].value;
	var selected_val_0;
	var selected_val_1;
	var selected_val_2;
	var selected_val_3;

	aSelect[0].onchange = function() {
		selected_val_0 = aSelect[0].options[aSelect[0].selectedIndex].value;
		if (selected_val_0 == "") {
			aP[3].innerHTML = "请选择产地!";
			aP[3].style.color = "red";
			aLabel[3].style.color = "red";
			aSelect[0].style.borderColor = "red";
		} else {
			aP[3].innerHTML = "产地已选择!";
			aP[3].style.color = "green";
			aLabel[3].style.color = "black";
			aSelect[0].style.borderColor = "darkgray";
		}
	}

	//计量单位
	aSelect[1].onchange = function() {
		selected_val_1 = aSelect[1].options[aSelect[1].selectedIndex].value;
		if (selected_val_1 == "") {
			aP[4].innerHTML = "请选择计量单位!";
			aP[4].style.color = "red";
			aLabel[4].style.color = "red";
			aSelect[1].style.borderColor = "red";
		} else {
			aP[4].innerHTML = "计量单位已选择!";
			aP[4].style.color = "green";
			aLabel[4].style.color = "black";
			aSelect[1].style.borderColor = "darkgray";
		}
	}

	//一级目录
	aSelect[2].onchange = function() {
		selected_val_2 = aSelect[2].options[aSelect[2].selectedIndex].value;
		if (selected_val_2 == "") {
			aP[5].innerHTML = "请选择一级目录!";
			aP[5].style.color = "red";
			aLabel[5].style.color = "red";
			aSelect[2].style.borderColor = "red";
		} else {
			aP[5].innerHTML = "一级目录已选择!";
			aP[5].style.color = "green";
			aLabel[5].style.color = "black";
			aSelect[2].style.borderColor = "darkgray";
		}
	}

	//二级目录
	aSelect[3].onchange = function() {
		selected_val_3 = aSelect[3].options[aSelect[3].selectedIndex].value;
		if (selected_val_3 == "") {
			aP[6].innerHTML = "请选择二级目录!";
			aP[6].style.color = "red";
			aLabel[6].style.color = "red";
			aSelect[3].style.borderColor = "red";
		} else {
			aP[6].innerHTML = "二级目录已选择!";
			aP[6].style.color = "green";
			aLabel[6].style.color = "black";
			aSelect[3].style.borderColor = "darkgray";
		}
	}

	//商品保存
	aButton[0].onclick = function() {
		alert("确定进行商品保存操作!");
		if (aInput[0].value == "" || aInput[1].value == "" || aInput[2].value == "" || selected_val_0 == "" ||
			selected_val_1 == "" || selected_val_2 == "" || selected_val_3 == "") {

			//商品货号
			if (aInput[0].value == "") {
				aP[0].innerHTML = "商品货号不能为空!";
				aP[0].style.color = "red";
				aLabel[0].style.color = "red";
				aInput[0].style.borderColor = "red";
			}

			//条形码
			if (aInput[1].value == "") {
				aP[1].innerHTML = "条形码不能为空!";
				aP[1].style.color = "red";
				aLabel[1].style.color = "red";
				aInput[1].style.borderColor = "red";
			}

            //商品中文名称
			if (aInput[2].value == "") {
			aP[2].innerHTML = "商品中文名称不能为空!";
			aP[2].style.color = "red";
			aLabel[2].style.color = "red";
			aInput[2].style.borderColor = "red";
		}
		//产地
		if (selected_val_0 == "") {
			aP[3].innerHTML = "请选择产地!";
			aP[3].style.color = "red";
			aLabel[3].style.color = "red";
			aSelect[0].style.borderColor = "red";
		}

		//计量单位
		if (selected_val_1 == "") {
			aP[4].innerHTML = "请选择计量单位!";
			aP[4].style.color = "red";
			aLabel[4].style.color = "red";
			aSelect[1].style.borderColor = "red";
		}

		//一级目录
		if (selected_val_2 == "") {
			aP[5].innerHTML = "请选择一级目录!";
			aP[5].style.color = "red";
			aLabel[5].style.color = "red";
			aSelect[2].style.borderColor = "red";
		}

		//二级目录
		if (selected_val_3 == "") {
			aP[6].innerHTML = "请选择二级目录!";
			aP[6].style.color = "red";
			aLabel[6].style.color = "red";
			aSelect[3].style.borderColor = "red";
		}

		alert("请填写完整信息!");
	} else {
		alert("商品保存成功!");
	}
}

//取消
aButton[1].onclick = function() {
	alert("确定进行取消操作!");
	for (var i = 0; i < aInput.length; i++) {
		aInput[i].value = "";
	}
	for (var i = 0; i < aSelect.length; i++) {
		aSelect[i].value = "";
	}
	window.location.reload(); //页面刷新
}

//退出
aButton[2].onclick = function() {
	alert("确定进行退出操作!");
}
}
