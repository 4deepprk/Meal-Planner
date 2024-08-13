document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const sendBtn = document.getElementById('send-btn');
    const previewDiv = document.getElementById('preview');

    // Function to clear the preview section
    function clearPreview() {
        previewDiv.innerText = '';
        previewDiv.style.display = 'none';
        sendBtn.style.display = 'none';
    }

    // Function to restrict date and time to present or future
    function setMinDateTime() {
        const dateInput = document.getElementById('date');
        const timeInput = document.getElementById('time');

        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');

        dateInput.setAttribute('min', `${year}-${month}-${day}`);
        timeInput.setAttribute('min', `${hours}:${minutes}`);
    }

    // Add event listeners to the dropdowns, date, and time input to clear the preview when changed
    const inputs = document.querySelectorAll('#option1, #option2, #option3, #date, #time');
    inputs.forEach(input => {
        input.addEventListener('change', clearPreview);
    });

    generateBtn.addEventListener('click', () => {
        const option1 = document.getElementById('option1').value;
        const option2 = document.getElementById('option2').value;
        const option3 = document.getElementById('option3').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        if (option1 && option2 && option3 && date && time) {
            const previewText = `Selected values:\nOption 1: ${option1}\nOption 2: ${option2}\nOption 3: ${option3}\nDate: ${date}\nTime: ${time}`;
            previewDiv.innerText = previewText;
            previewDiv.style.display = 'block';
            sendBtn.style.display = 'block';
        } else {
            alert('Please make sure all options, date, and time are selected.');
        }
    });

    sendBtn.addEventListener('click', () => {
        const previewText = previewDiv.innerText;
        navigator.clipboard.writeText(previewText).then(() => {
            alert('Message copied to clipboard! You can now paste it in your WhatsApp group.');
        });
    });

    // Set min date and time on page load
    setMinDateTime();
});
