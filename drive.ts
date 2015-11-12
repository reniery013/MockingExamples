import vehicle = require('./vehicle');
import moto = require('./moto');
import iDriver = require('./iDriver');
import motoDriver = require('./motoDriver');


export module drive {
	export function startVehicle(v: vehicle.mocking.vehicle,d: iDriver){

		
		var licenseType = d.getLicenseType()
		
		if(licenseType == 'A'){
			v.setEngineStarted(true);			
		} else {
			v.setEngineStarted(false);	
		}
				
		return v.getEngineStarted();
		
	}
	
	export function stopVehicle(v: vehicle.mocking.vehicle,d: iDriver){

		v.setEngineStarted(false);
		return v.getEngineStarted();
		
	}	
	
	

}