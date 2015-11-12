import vehicle = require('./vehicle')

export class moto extends vehicle.mocking.vehicle {
	
	moto(){
		this.setMaxSpeed(10);
	}
	
	runMaxSpeed(){
		this.setMaxSpeed(10);
	}	
			
} 