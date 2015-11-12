
export module mocking {
	export class vehicle {
	
		private numberOfWheels: number;
		private maxSpeed: number = 1;
		private engineStarted: boolean = false;
		private isCarClean: boolean = false;
		
		vehicle(){		
		}
		
		setMaxSpeed(speed: number){
			this.maxSpeed = speed;
		}

		getMaxSpeed(){
			return this.maxSpeed;
		}
		
		setEngineStarted(engineStarted: boolean){
			this.engineStarted = engineStarted;
		}
		
		getEngineStarted(){
			return this.engineStarted;
		}
		
		setIsCarClean(carClean: boolean){
			this.isCarClean = carClean;
		}
		
		getIsCarClean(){
			return this.isCarClean;
		}
																				
	}
}




