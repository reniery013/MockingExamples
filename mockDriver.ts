import iDriver = require('./iDriver');
import vehicle = require('./vehicle');


export class mockDriver implements iDriver {
	
	age: number;
	licenseType: string;
	
	mockDriver(){
	}
	
	getLicenseType(){
		return 'X'
	}
	
	CleanVehicle(v: vehicle.mocking.vehicle,b: boolean){
		
		if(b != true){
			throw new Error("Not Expected Value")
		}
		
		v.setIsCarClean(b);
	}		
	
				
} 