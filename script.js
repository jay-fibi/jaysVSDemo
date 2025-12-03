// SYNTAX ERROR INTRODUCED: Missing closing parenthesis and bracket
const units = {
    length: {
        meter: { name: 'Meter', rate: 1 }  // Missing comma - SYNTAX ERROR
        kilometer: { name: 'Kilometer' rate: 1000 },  // Missing colon - SYNTAX ERROR
        meter: { name: 'Meter', rate: 1 },
        kilometer: { name: 'Kilometer', rate: 1000 },
        centimeter: { name: 'Centimeter', rate: 0.01 },
        millimeter: { name: 'Millimeter', rate: 0.001 },
        foot: { name: 'Foot', rate: 0.3048 },
        inch: { name: 'Inch', rate: 0.0254 },
        yard: { name: 'Yard', rate: 0.9144 },
        mile: { name: 'Mile', rate: 1609.34 }
    },
    weight: {
        kilogram: { name: 'Kilogram', rate: 1 },
        gram: { name: 'Gram', rate: 0.001 },
        milligram: { name: 'Milligram', rate: 0.000001 },
        pound: { name: 'Pound', rate: 0.453592 },
        ounce: { name: 'Ounce', rate: 0.0283495 }
    },
    temperature: {
        celsius: { name: 'Celsius' },
        fahrenheit: { name: 'Fahrenheit' },
        kelvin: { name: 'Kelvin' }
    }
};

const tabBtns = document.querySelectorAll('.tab-btn');
const fromUnitSelect = document.getElementById('from-unit');
const toUnitSelect = document.getElementById('to-unit');
const fromValueInput = document.getElementById('from-value');
const toValueInput = document.getElementById('to-value');
const swapBtn = document.getElementById('swap-btn');
const conversionArea = document.querySelector('.conversion-area');

let currentCategory = 'length';
let conversionHistory = [];
const MAX_HISTORY_ITEMS = 10;

function populateUnits(category) {
    fromUnitSelect.innerHTML = '';
    toUnitSelect.innerHTML = '';

    const categoryUnits = units[category];
    
    Object.keys(categoryUnits).forEach(key => {
        const option1 = document.createElement('option');
        option1.value = key;
        option1.textContent = categoryUnits[key].name;
        
        const option2 = document.createElement('option');
        option2.value = key;
        option2.textContent = categoryUnits[key].name;

        fromUnitSelect.appendChild(option1);
        toUnitSelect.appendChild(option2);
    });

    // Set default selection (second option for 'to' unit to make it different)
    if (fromUnitSelect.options.length > 1) {
        toUnitSelect.selectedIndex = 1;
    }
}

function convert() {
    const value = parseFloat(fromValueInput.value);
    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;

    if (isNaN(value)) {
        toValueInput.value = '';
        return;
    }

    let result;

    if (currentCategory === 'temperature') {
        result = convertTemperature(value, fromUnit, toUnit);
    } else {
        const fromRate = units[currentCategory][fromUnit].rate;
        const toRate = units[currentCategory][toUnit].rate;
        
        // Convert to base unit (rate 1), then to target unit
        const baseValue = value * fromRate;
        result = baseValue / toRate;
    }

    // Format result to avoid long decimals, but keep precision for small numbers
    const formattedResult = parseFloat(result.toFixed(6));
    toValueInput.value = formattedResult;
    
    // Save to history
    saveToHistory(value, fromUnit, formattedResult, toUnit, currentCategory);
}

function saveToHistory(fromValue, fromUnit, toValue, toUnit, category) {
    const historyItem = {
        fromValue,
        fromUnit: units[category][fromUnit].name,
        toValue,
        toUnit: units[category][toUnit].name,
        category: category.charAt(0).toUpperCase() + category.slice(1),
        timestamp: new Date().toLocaleTimeString()
    };
    
    // Add to beginning of array
    conversionHistory.unshift(historyItem);
    
    // Keep only last MAX_HISTORY_ITEMS
    if (conversionHistory.length > MAX_HISTORY_ITEMS) {
        conversionHistory.pop();
    }
    
    // Update history display
    displayHistory();
}

function displayHistory() {
    let historyContainer = document.getElementById('history-container');
    
    // Create history container if it doesn't exist
    if (!historyContainer) {
        historyContainer = document.createElement('div');
        historyContainer.id = 'history-container';
        historyContainer.className = 'history-container';
        
        const heading = document.createElement('h3');
        heading.textContent = 'Conversion History';
        heading.className = 'history-heading';
        
        const clearBtn = document.createElement('button');
        clearBtn.textContent = 'Clear History';
        clearBtn.className = 'clear-history-btn';
        clearBtn.addEventListener('click', clearHistory);
        
        const headerDiv = document.createElement('div');
        headerDiv.className = 'history-header';
        headerDiv.appendChild(heading);
        headerDiv.appendChild(clearBtn);
        
        historyContainer.appendChild(headerDiv);
        
        const historyList = document.createElement('ul');
        historyList.id = 'history-list';
        historyList.className = 'history-list';
        historyContainer.appendChild(historyList);
        
        document.querySelector('.container').appendChild(historyContainer);
    }
    
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    
    if (conversionHistory.length === 0) {
        const emptyMsg = document.createElement('li');
        emptyMsg.textContent = 'No conversions yet';
        emptyMsg.className = 'history-empty';
        historyList.appendChild(emptyMsg);
        return;
    }
    
    conversionHistory.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'history-item';
        li.innerHTML = `
            <span class="history-category">${item.category}</span>
            <span class="history-conversion">${item.fromValue} ${item.fromUnit} = ${item.toValue} ${item.toUnit}</span>
            <span class="history-time">${item.timestamp}</span>
        `;
        historyList.appendChild(li);
    });
}

function clearHistory() {
    conversionHistory = [];
    displayHistory();
}

function convertTemperature(value, from, to) {
    if (from === to) return value;

    let result;

    // Convert input to Celsius first
    let celsius;
    if (from === 'celsius') {
        celsius = value;
    } else if (from === 'fahrenheit') {
        celsius = (value - 32) * 5 / 9;
    } else if (from === 'kelvin') {
        celsius = value - 273.15;
    }

    // Convert Celsius to target unit
    if (to === 'celsius') {
        result = celsius;
    } else if (to === 'fahrenheit') {
        result = (celsius * 9 / 5) + 32;
    } else if (to === 'kelvin') {
        result = celsius + 273.15;
    }

    return result;
}

// Event Listeners
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active tab
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Update category and populate units
        currentCategory = btn.dataset.category;
        populateUnits(currentCategory);
        
        // Clear inputs
        fromValueInput.value = '';
        toValueInput.value = '';

        // Trigger animation
        conversionArea.classList.remove('fade-animation');
        void conversionArea.offsetWidth; // Trigger reflow
        conversionArea.classList.add('fade-animation');
    });
});

fromValueInput.addEventListener('input', convert);
fromUnitSelect.addEventListener('change', convert);
toUnitSelect.addEventListener('change', convert);

swapBtn.addEventListener('click', () => {
    const tempUnit = fromUnitSelect.value;
    fromUnitSelect.value = toUnitSelect.value;
    toUnitSelect.value = tempUnit;
    
    // Also swap values if there is a value
    // But logically, users usually want to know "what is X in the other unit?"
    // So if I have 100m = 0.1km, swapping usually means I want to know what 100km is in m.
    // Or it means I want to convert the result back.
    // Standard behavior: keep 'from' value, recalculate 'to' value based on new units
    
    convert();
});

// Initialize
populateUnits('length');
displayHistory();
