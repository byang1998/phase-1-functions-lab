// Code your solution in this file!
const headquarters = 42;

function distanceFromHqInBlocks(distance1){
    if (distance1 > 42) {
        return (distance1 - headquarters);
     } else if (distance1 < 42) {
         return (headquarters - distance1);
     }
}

const feet = 264
function distanceFromHqInFeet(distance2) {
if (distance2 > 42) {
    return ((distance2 - headquarters) * feet);
 } else if (distance2 < 42) {
     return ((headquarters - distance2)) * feet;
 }
}

function distanceTravelledInFeet(headquarters, distance2) {
    if (distance2 > headquarters){
        return (distance2 - headquarters)*feet;
    }else{
        return (headquarters - distance2)*feet;
    }
}

function calculatesFarePrice(start, destination) {
   const total = distanceTravelledInFeet(start, destination)
   
   if (total < 400) {
       return 0
   } else if ((total >= 400) && (total <= 2000)) {
       return total * 0.02;
 
   } else if (total > 2500) {
       return 'cannot travel that far'
    } else if (total > 2000) {
        return 25 

    }
    }
