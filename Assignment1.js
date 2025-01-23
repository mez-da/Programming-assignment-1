// Require the readline module to handle command line input/output.
const readline = require('readline');

// Create a readline interface using standard input and output.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Initialize an array to store the numbers entered by the user.
const numbers = [];

// Function to calculate the mean of an array of numbers.
function calculateMean(nums) {
    // Sum up all numbers using the reduce method and divide by the length of the array.
    const sum = nums.reduce((acc, cur) => acc + cur, 0);
    return sum / nums.length;
}

// Function to calculate the median of an array of numbers.
function calculateMedian(nums) {
    // Sort the array in ascending order.
    const sorted = nums.slice().sort((a, b) => a - b);
    // Find the middle index.
    const mid = Math.floor(sorted.length / 2);

    // Check if the array length is even or odd to determine how to calculate the median.
    if (sorted.length % 2 === 0) {
        // If even, return the average of the two middle numbers.
        return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
        // If odd, return the middle number.
        return sorted[mid];
    }
}

// Prompt the user to enter numbers or 'q' to quit.
console.log("Enter numbers and type 'q' to quit:");

// Event listener for 'line' event, which is triggered every time the user inputs a line.
rl.on('line', (input) => {
    // Check if the user wants to quit the program.
    if (input.toLowerCase() === 'q') {
        // Calculate and display the mean and median if numbers were entered.
        if (numbers.length > 0) {
            const mean = calculateMean(numbers);
            const median = calculateMedian(numbers);
            console.log(`Mean: ${mean}`);
            console.log(`Median: ${median}`);
        } else {
            console.log("No numbers were entered.");
        }
        // Close the readline interface.
        rl.close();
    } else {
        // Convert the input to an integer.
        const number = parseInt(input);
        // Validate that the input is a number.
        if (isNaN(number)) {
            console.log("Please enter a valid integer.");
        } else {
            // Add the number to the array.
            numbers.push(number);
        }
    }
});

// Event listener for 'close' event to notify when the program has been terminated.
rl.on('close', () => {
    console.log("Program terminated.");
});
