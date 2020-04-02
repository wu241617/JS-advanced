window.onload =function(){
	var aIcon = document.querySelectorAll(".container .left ul li i");
	var old;
	function checkColor(){//检查最开始哪一个元素默认点击
		for(var i=0; i<aIcon.length; i++){
			if(window.getComputedStyle(aIcon[i]).color === "rgb(0, 128, 0)"){
				old = i;
			}
		}
	}
	
	for(var i=0;i<aIcon.length;i++){
		aIcon[i].onclick = function(){//遍历添加点击事件
			checkColor();//调用函数,获得目前的old值
			if(old !== i){//如果点击的不是默认样式本身,原来的默认样式哪一个改变
				this.style.color  = "rgb(0, 128, 0)";
				aIcon[old].style.color = "white";
			}else{
				this.style.color  = "rgb(0, 128, 0)";//如果点击的不是默认样式本身,原来的默认样式不变
			}
			
		}
	}
	
	var seach = document.getElementById("seach");
	seach.onfocus = function(){
		this.style.backgroundColor = "white";
	}
	seach.onblur = function(){
		this.style.backgroundColor = "#DAD8D8";
	}
	
	var text = document.getElementById("text");
	var send = document.getElementById("send");
	send.onclick = function(){
		var iframe1 = document.getElementById("iframe1");
		var oUl = iframe1.contentWindow.document.getElementById("ul");
		
		var oLi = iframe1.contentWindow.document.createElement("li");
		oLi.setAttribute("class","item");
		oUl.appendChild(oLi);
		
		var oP = iframe1.contentWindow.document.createElement("p");
		oLi.appendChild(oP);
		
		var oText = iframe1.contentWindow.document.createTextNode(text.value);
		oP.appendChild(oText);
		
		text.value = "";
	}
}