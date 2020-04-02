var m = require("./math.js");

function circle(r){
	return m.multiple(m.PI,m.square(r));
}

module.exports = {
	s_circle:circle
}