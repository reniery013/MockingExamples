import iDriver = require('./iDriver');


export class dummyDriver implements iDriver {
	
	age: number;
	licenseType: string;
	
	dummyDriver(){
	}
	
	getLicenseType(){
		return 'X'
	}		
	
				
} 