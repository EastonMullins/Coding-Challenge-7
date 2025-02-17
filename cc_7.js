//Task 1 - Customer Invoice Calculation

function calculateInvoice(subtotal, taxRate, discount){
    let total = (subtotal + (subtotal * taxRate) - discount);
    console.log(`Total Invoice: $${total}`);
}
calculateInvoice(100, 0.08, 5); // Expected output: "Total Invoice: $103.00"
calculateInvoice(500, 0.1, 20); // Expected output: "Total Invoice: $530.00"


//Task 2 - Employee Hourly Wage Calculation

function calculateHourlyWage(salary, hoursPerWeek){
    let hourlyWage = (salary/ (hoursPerWeek * 52));
    console.log(`Hourly Wage: $${hourlyWage}`);
}
calculateHourlyWage(52000, 40); // Expected output: "Hourly Wage: $25.00"
calculateHourlyWage(75000, 35); // Expected output: "Hourly Wage: $41.21"


//Task 3 - Customer Loyalty Discount

let calculateLoyaltyDiscount = (amount, years) => {

    if (years >= 5) {
        discount = (amount * (1 - 0.15));
    }
    else if (years >= 3) {
        discount = (amount * (1 - .1));
    }
    else if (years < 3) {
        discount = (amount * (1 - 0.05));
    }
    console.log(`Discounted Price: $${discount}`);
}
calculateLoyaltyDiscount(100, 6); // Expected output: "Discounted Price: $85.00"
calculateLoyaltyDiscount(200, 2); // Expected output: "Discounted Price: $190.00"

//Task 4 - Product Shipping Costs Calculation

function calculateShippingCost(weight, location, expedited = fasle){
    if (location === "USA"){
        cost = (5 + (0.5 * weight));
    }
    else if (location === "Canada"){
        cost = (10 + 0.7 * weight);
    }
    if (expedited){
        cost = (cost + 10);
    }
    console.log(`Shipping Cost: $${cost}`);
}
calculateShippingCost(10, "USA", true); // Expected output: "Shipping Cost: $20.00"
calculateShippingCost(5, "Canada", false); // Expected output: "Shipping Cost: $13.50"