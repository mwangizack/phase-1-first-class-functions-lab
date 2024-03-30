// Code your solution in this file!
const returnFirstTwoDrivers = arrayofDrivers => arrayofDrivers.slice(0,2);

const returnLastTwoDrivers = arrayofDrivers => arrayofDrivers.slice(arrayofDrivers.length - 2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
    return (fare) => fare * num;
}

const fareDoubler = fare => createFareMultiplier(2)(fare);

const fareTripler = fare => createFareMultiplier(3)(fare);

function selectDifferentDrivers(arrayOfDrivers, returnDrivers){
    return returnDrivers(arrayOfDrivers);
}

 console.log(selectDifferentDrivers([1,2,3,4,5], returnLastTwoDrivers))
