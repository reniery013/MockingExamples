import iDriver = require('./iDriver');


export class stubDriver implements iDriver {
	
	age: number;
	licenseType: string;
	
	stubDriver(){
	}
	
	getLicenseType(){
		//This is a stub
		//Instead of querying a database to get the license type we simple return a hard coded value
				
		return 'A';
	}		
	
				
} 