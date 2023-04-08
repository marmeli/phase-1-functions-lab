// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    const headquarters = 42
return Math.abs(blocks - headquarters); 
}

function distanceFromHqInFeet(feet){
    return distanceFromHqInBlocks(feet) *264;
       
}
function distanceTravelledInFeet(start, destination){
    return Math.abs(start - destination) *264
}

function calculatesFarePrice(start, destination){
    let feet = distanceTravelledInFeet(start, destination)
    if (feet > 2500){
    return 'cannot travel that far';
    }
    else if (feet > 2000) {
        return 25;

    }
    else if (feet > 400) {
        return (feet - 400)*0.02;
    }
    else {
        return 0;
    }
        

}
