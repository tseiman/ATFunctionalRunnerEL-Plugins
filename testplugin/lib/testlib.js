class Testlib {

	constructor(testel,name,callback) {
		this.testel = testel;		
		this.name = name;
		this.callback = callback;
		console.log("calling constructor of testlib with name: " +  name);
	}

	someMethod(a,b) {
		var self = this;
		var res = a + b;
		$(this.testel).append("<div id='testlib-" + this.name + "'><B>Hello World! Name is:" + this.name + " Res:" + res + "</B><div>");
		$( "#testlib-" + this.name ).click(function() {
		    if(self.callback !== undefined && self.callback !== null) {
			self.callback(self.name);
		    }		
		});
	}	
}
module.exports = Testlib;