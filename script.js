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

    // Add event listeners to the dropdowns and date input to clear the preview when changed
    const inputs = document.querySelectorAll('#option1, #option2, #option3, #date');
    inputs.forEach(input => {
        input.addEventListener('change', clearPreview);
    });

    generateBtn.addEventListener('click', () => {
        const option1 = document.getElementById('option1').value;
        const option2 = document.getElementById('option2').value;
        const option3 = document.getElementById('option3').value;
        const date = document.getElementById('date').value;

        if (option1 && option2 && option3 && date) {
            const previewText = `Selected values:\nOption 1: ${option1}\nOption 2: ${option2}\nOption 3: ${option3}\nDate: ${date}`;
            previewDiv.innerText = previewText;
            previewDiv.style.display = 'block';
            sendBtn.style.display = 'block';
        } else {
            alert('Please make sure all options and date are selected.');
        }
    });

    sendBtn.addEventListener('click', () => {
        const previewText = previewDiv.innerText;
        navigator.clipboard.writeText(previewText).then(() => {
            alert('Message copied to clipboard! You can now paste it in your WhatsApp group.');
        });
    });
});
