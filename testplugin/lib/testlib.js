class Testlib {
	constructor(testel,name) {
		this.testel = testel;		
		this.name = name;
	}

	someMethod(a,b) {
		var res = a + b;
		$(this.testel).append("<B>Hello World! Name is:" + this.name + " Res:" + res + "</B>");
	}	
}
module.exports = Testlib;