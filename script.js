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
    function setMinDate() {
        const dateInput = document.getElementById('date');
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        dateInput.setAttribute('min', `${year}-${month}-${day}`);
    }

    // Add event listeners to the dropdowns, and date input to clear the preview when changed
    const inputs = document.querySelectorAll('#option1, #option2, #option3, #option4, #option5, #option6, #option7, #option8, #date');
    inputs.forEach(input => {
        input.addEventListener('change', clearPreview);
    });

    generateBtn.addEventListener('click', () => {
    const date = document.getElementById('date').value;
    const option1 = document.getElementById('option1').value;
    const option2 = document.getElementById('option2').value;
    const option3 = document.getElementById('option3').value;
    const option4 = document.getElementById('option4').value;
    const option5 = document.getElementById('option5').value;
    const option6 = document.getElementById('option6').value;
    const option7 = document.getElementById('option7').value;
    const option8 = document.getElementById('option8').value;

    if (date && option1 && option2 && option3 && option4 && option5 && option6 && option7 && option8) {
        const dateObj = new Date(date);

        // Extract the day, month, and year
        const fmday = String(dateObj.getDate()).padStart(2, '0'); // Add leading zero if necessary
        const fmmonth = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
        const fmyear = dateObj.getFullYear();

        // Get the day of the week as a number (0 for Sunday, 1 for Monday, etc.)
        const dayNumber = dateObj.getDay();

        // Optional: Convert the day number to a string (e.g., "Sunday", "Monday")
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayName = daysOfWeek[dayNumber];

        // Format the date as dd mm yyyy
        const formattedDate = `${fmday}-${fmmonth}-${fmyear}`;

        // Filter out "NA" from the options
        const lunchOptions = [option1, option2, option3, option4, option5, option6].filter(opt => opt !== "NA");
        const dinnerOptions = [option7, option8].filter(opt => opt !== "NA");

        // Construct the preview text
	let previewText = `${formattedDate}, ${dayName}<br><br>`;
        // let previewText = `\n ${formattedDate}, ${dayName}\n\n`;

        if (lunchOptions.length > 0) {
            // previewText += `Lunch:\n${lunchOptions.join("\n")}\n\n`;
	    // previewText += `<b>Lunch:</b>\n${lunchOptions.join("\n")}\n\n`;
	    previewText += `<b>Lunch:</b><br>${lunchOptions.join("<br>")}<br><br>`;
        }

        if (dinnerOptions.length > 0) {
            // previewText += `Dinner:\n${dinnerOptions.join("\n")}\n`;
	    // previewText += `<b>Dinner:</b>\n${dinnerOptions.join("\n")}\n`;
            previewText += `<b>Dinner:</b><br>${dinnerOptions.join("<br>")}<br>`;
        }

        previewDiv.innerHTML = previewText;
        // previewDiv.innerHTML = previewText;
        previewDiv.style.display = 'block';
        sendBtn.style.display = 'block';
        // Scroll to the preview section
        previewDiv.scrollIntoView({ behavior: 'smooth' });

    } else {
        alert('Please make sure all the options are selected!');
    }
});


    sendBtn.addEventListener('click', () => {
        const previewText = previewDiv.innerText;
        navigator.clipboard.writeText(previewText).then(() => {
            alert('Message copied. You can now share the meal plan :)');
        });
    });

    // Set min date on page load
    setMinDate();
});