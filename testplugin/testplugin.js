
var Testlib  = require('../ATplugins/testplugin/lib/testlib.js');

console.log("Plugina Class read");

class Testplugin {
	
	constructor(name, dom,append_to_id) {
		console.log("running constructor of Testplugin name:" + name );
		var apped_to = (append_to_id === undefined) ? "#space" : append_to_id;
		this.name = name;
		var self = this;
		
		this.value = dom.evaluate( './/testplugin[@name="' + name + '"]', dom, null, XPathResult.STRING_TYPE, null ).stringValue;

		var myLib = new Testlib(apped_to,this.name,this.callback);
		myLib.someMethod(1,2);
    		
	}
	
	callback(name) {
	    console.log("clicked: " + name);
	}
	
}
config.addPluginClassLookup("Testplugin",Testplugin);
