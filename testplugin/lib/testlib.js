class Testlib {
	constructor(testel) {
		this.testel = testel;		
	}

	someMethod(a,b) {
		var res = a + b;
		$(this.testel).append("<B>Hello World! " + res + "</B>");
	}	
}
module.exports = Testlib;