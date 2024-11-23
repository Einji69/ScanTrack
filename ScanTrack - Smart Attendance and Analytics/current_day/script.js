const urlParams = new URLSearchParams(window.location.search);
const selectedDate = urlParams.get('date');

if (selectedDate) {
    const dateParts = selectedDate.split('-'); // Format: "YYYY-MM-DD"
    const day = dateParts[2]; // Get the day (22)
    document.getElementById('dayNumber').textContent = day; // Display it in the circle

    document.getElementById('currentDay').textContent = `Current day: ${day}`;
}

const labels = document.querySelectorAll('.paragraph');

labels.forEach(label => {
    label.addEventListener('click', function() {
        this.classList.toggle('checked');
    });
});

document.getElementById("subjectButton").addEventListener("click", function() {
    alert('Subject button clicked!');
});
