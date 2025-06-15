// Code your solution in this file!
// 1. Return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. Return the last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. Store the two functions in an array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Higher-order function that creates a fare multiplier
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// 5. Fare doubler using createFareMultiplier
const fareDoubler = createFareMultiplier(2);

// 6. Fare tripler using createFareMultiplier
const fareTripler = createFareMultiplier(3);

// 7. Select different drivers using one of the selecting functions
function selectDifferentDrivers(drivers, driverSelector) {
  return driverSelector(drivers);
}
