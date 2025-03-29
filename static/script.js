// JavaScript for form validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        let valid = true;
        const inputs = form.querySelectorAll('input[type="text"]');
        
        inputs.forEach(input => {
            if (isNaN(input.value) || input.value.trim() === '') {
                valid = false;
                input.style.borderColor = 'red'; // Highlight invalid input
            } else {
                input.style.borderColor = ''; // Reset border color
            }
        });

        if (!valid) {
            event.preventDefault(); // Prevent form submission
            alert('Please enter valid numeric values for all fields.');
        }
    });
});
