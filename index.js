const arrayOfDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(arrayOfDrivers){
    return arrayOfDrivers.slice(0, 2); 
}

const returnLastTwoDrivers = function(arrayOfDrivers){
    return arrayOfDrivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
    return function(fare){
        return num * fare;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, selectingDrivers){
    if (selectingDrivers === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(arrayOfDrivers);
    } else if (selectingDrivers === returnLastTwoDrivers){
        return returnLastTwoDrivers(arrayOfDrivers);
    }
   
}