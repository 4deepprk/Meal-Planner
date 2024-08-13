document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const sendBtn = document.getElementById('send-btn');
    const previewDiv = document.getElementById('preview');

    generateBtn.addEventListener('click', () => {
        const option1 = document.getElementById('option1').value;
        const option2 = document.getElementById('option2').value;
        const option3 = document.getElementById('option3').value;

        const previewText = `Selected values:\nOption 1: ${option1}\nOption 2: ${option2}\nOption 3: ${option3}`;
        previewDiv.innerText = previewText;
        previewDiv.style.display = 'block';
        sendBtn.style.display = 'block';
    });

    sendBtn.addEventListener('click', () => {
        const previewText = previewDiv.innerText;
        navigator.clipboard.writeText(previewText).then(() => {
            alert('Message copied to clipboard! You can now paste it in your WhatsApp group.');
        });
    });
});
