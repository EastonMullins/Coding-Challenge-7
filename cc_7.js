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

function calculateShippingCost(weight, location, expedited = false){
    let cost = 0
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

//Task 5 - Business Loan Interest Calculator

function calculateLoanInterest(principal, rate, years){
    let interest = (principal * rate * years);
    console.log(`Total Interest: $${interest}`);
}
calculateLoanInterest(1000, 0.05, 3); // Expected output: "Total Interest: $150.00"
calculateLoanInterest(5000, 0.07, 5); // Expected output: "Total Interest: $1750.00"

//Task 6 - Filtering High-Value Transactions

function filterHighValueTransactions(transactions, filterFunction) {
    let highValueTransactions = transactions.filter(filterFunction);
    console.log(`${highValueTransactions}`);
}
let transactions = [500, 1200, 3000, 800, 2200];
filterHighValueTransactions(transactions, amount => amount > 1000);
// Expected output: [1200, 3000, 2200]

//Task 7 - Budget Tracker

function createBudgetTracker() {
    let budget = 0;

    return function(expense) {
        budget -= expense;
        return `Current Balance: $${budget}`;
    
    };
}
let budget = createBudgetTracker();
console.log(budget(300)); // Expected output: "Current Balance: -$300"
console.log(budget(200)); // Expected output: "Current Balance: -$500"

//Task 8 - Business Growth Projection

function calculateGrowth(years, revenue) {
    if (years === 0 || years >=10) {
        return `Projected Revenue $${revenue}`;
    }
    return calculateGrowth(years + 1, revenue * 1.05);
}
console.log(calculateGrowth(8,1000));// projected revenue shoud be $1102
console.log(calculateGrowth(5,5000)); // projected revenue should be $6381 