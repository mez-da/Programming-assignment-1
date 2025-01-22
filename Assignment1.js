const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numbers = [];

// Function to calculate mean
function calculateMean(nums) {
    const sum = nums.reduce((acc, cur) => acc + cur, 0);
    return sum / nums.length;
}

// Function to calculate median
function calculateMedian(nums) {
    const sorted = nums.slice().sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
        return sorted[mid];
    }
}

console.log("Enter numbers and type 'q' to quit:");

rl.on('line', (input) => {
    if (input.toLowerCase() === 'q') {
        if (numbers.length > 0) {
            const mean = calculateMean(numbers);
            const median = calculateMedian(numbers);
            console.log(`Mean: ${mean}`);
            console.log(`Median: ${median}`);
        } else {
            console.log("No numbers were entered.");
        }
        rl.close();
    } else {
        const number = parseInt(input);
        if (isNaN(number)) {
            console.log("Please enter a valid integer.");
        } else {
            numbers.push(number);
        }
    }
});

rl.on('close', () => {
    console.log("Program terminated.");
});
