function firstNonRepeatingCharacter(str) {
    // Create a hash map to store character frequencies
    const charCount = new Map();
    
    // Iterate through the string to count character frequencies
    for (let char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    // Iterate through the string again to find the first non-repeating character
    for (let char of str) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }
    
    // If no non-repeating character found, return null
    return null;
}

// Example usage:
const inputString = "aabcccdeeffgh";
const firstNonRepeating = firstNonRepeatingCharacter(inputString);
console.log("First non-repeating character:", firstNonRepeating);


function findFirstNonRepeating() {
    // Get the input string from the user
    const inputString = document.getElementById("inputString").value;

    // Find the first non-repeating character
    const result = getFirstNonRepeatingChar(inputString);

    // Display the result
    const resultElement = document.getElementById("result");
    resultElement.textContent = result === null ? "No non-repeating character found." : firstNonRepeatingCharacter `${result}`;
}

function getFirstNonRepeatingChar(inputStr) {
    const charCount = {};

    // Count occurrences of each character
    for (const char of inputStr) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first non-repeating character
    for (const char of inputStr) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // Return null if no non-repeating character is found
    return null;
}

