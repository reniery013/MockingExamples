import vehicle = require('./vehicle')

export class spyVehicle extends vehicle.mocking.vehicle {
	
	private engineStartedCounter: number = 0;
	
	spyVehicle(){
		this.setMaxSpeed(10);
	}
	
	setEngineStarted(engineStarted: boolean){
		
		if(engineStarted == true){
			this.engineStartedCounter++;
		}
		
		super.setEngineStarted(engineStarted);
	}
	
	getNumberOfEngineStarts(){
		return this.engineStartedCounter;		
	}

	
			
} 