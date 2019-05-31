class Testlib {
	constructor(testel) {
		this.testel = testel;		
	}

	someMethod(a,b) {
		var res = a + b;
		$(this.testel).append("<B>" + res + "</B>");
	}	
}
