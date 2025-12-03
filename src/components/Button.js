// Button Component
// Located in nested directory: src/components/
// Created by Cline

/**
 * Button Component Class
 * A reusable button component for the application
 */
class Button {
    constructor(options = {}) {
        this.text = options.text || 'Click Me';
        this.type = options.type || 'primary';
        this.onClick = options.onClick || null;
        this.disabled = options.disabled || false;
    }

    /**
     * Render the button element
     * @returns {HTMLButtonElement} The button element
     */
    render() {
        const button = document.createElement('button');
        button.textContent = this.text;
        button.className = `btn btn-${this.type}`;
        button.disabled = this.disabled;

        if (this.onClick && typeof this.onClick === 'function') {
            button.addEventListener('click', this.onClick);
        }

        return button;
    }

    /**
     * Update button text
     * @param {string} newText - The new text for the button
     */
    setText(newText) {
        this.text = newText;
    }

    /**
     * Enable or disable the button
     * @param {boolean} disabled - Whether the button should be disabled
     */
    setDisabled(disabled) {
        this.disabled = disabled;
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Button;
}
