// Basic JavaScript file
// Created by Cline

// REFERENCE ERROR: Importing a file that does not exist
import { helper } from './utils/missingHelper.js';  // This file doesn't exist!
import { config } from './config/settings.js';  // This file also doesn't exist!
const missingModule = require('./lib/nonexistent.js');  // CommonJS import of missing file

// Simple greeting function
function greet(name) {
    return `Hello, ${name}! Welcome to our application.`;
}

// Event listener for DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Application initialized');
    
    // Display greeting in console
    const greeting = greet('User');
    console.log(greeting);
});

// Simple utility function
function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { greet, formatDate };
}
