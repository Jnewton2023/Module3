//Created variables for each vehicle, make, and model//
var carMake="Honda";
var carModel="Accord";
var carYear= 2018;

// Displaying the vehicle details in the console
console.log(`You won a ${carYear} ${carMake} ${carModel}!!!!🎊🎉🥳`);

// Displaying the vehicle details on the browser screen using the DOM
var output = document.createElement("p");
output.textContent = `You won a ${carYear} ${carMake} ${carModel}!!!!🎊🎉🥳`;
document.body.appendChild(output);

// Function that calculates the total cost of detailing services
function calculateCost(service, hours) {
  let cost = 100; // Base cost per hour

  if (service === "Basic Detailing") {
    cost *= 0.75; // Basic Detailing is a 0.75-hour job
  } 
  else if (service === "Gold Detailing") {
    cost *= 1.5; // Gold Detailing is a 1.5 hour job
  } 
  else if (service === "Platinum Detailing") {
    cost *= 3; // Platinum Detailing is a 3 hour job
  } 
  else {
    console.log("Invalid service type");
    return 0; // Return 0 for invalid service type
  }
  return cost * hours; // Multiply the cost per hour by the number of hours
}

// displays usage of the function
let serviceType = "Basic Detailing";
let hours = 2;
let totalCost = calculateCost(serviceType, hours);
console.log("Total cost for " + serviceType + " for " + hours + " hours: $" + totalCost.toFixed(2));

// Output to the DOM
let output = document.createElement('p');
output.textContent = "Total cost for " + serviceType + " for " + hours + " hours: $" + totalCost.toFixed(2);