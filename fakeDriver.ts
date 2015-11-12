import iDriver = require('./iDriver');
import vehicle = require('./vehicle');


export class fakeDriver implements iDriver {
	
	age: number;
	licenseType: string;
	
	fakeDriver(){
	}
	
	getLicenseType(){
		return 'X'
	}
	
	CleanVehicle(v: vehicle.mocking.vehicle){
		v.setIsCarClean(true);
	}		
	
				
} 