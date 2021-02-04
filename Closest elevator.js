function elevator(leftElevatorPosition, rightElevatorPosition, requestedFloor){
    class Elevator {
      constructor(label, currentPosition, call) {
        this.label = label;
        this.currentPosition = currentPosition;
        this.distance = Math.abs(requestedFloor - currentPosition)
        return this;
      }
    }
  
    const availableElevators = [
      //  right elevator has precedence, always checked its position first
      new Elevator('right', rightElevatorPosition, requestedFloor),
      new Elevator('left', leftElevatorPosition, requestedFloor),
    ];
    
    let closestElevator = availableElevators[0];
    
    for (let i in availableElevators) {
      const elevator = availableElevators[i];
      if (elevator.distance === 0) { return elevator.label; } 
      if (elevator.distance < closestElevator.distance) {
        closestElevator = elevator;
      }
    }
    
    return closestElevator.label;
  }