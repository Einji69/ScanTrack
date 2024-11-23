const header = document.querySelector('.calendar h3');
const dates = document.querySelector('.dates');
const navs = document.querySelectorAll('#prev, #next');
const backButton = document.querySelector('#back');



const months = [
    "January", "February", "March", "April", "May", 
    "June", "July", "August", "September", "October", 
    "November", "December"
];

let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

function renderCalendar() {
    const start = new Date(year, month, 1).getDay();
    const endDate = new Date(year, month + 1, 0).getDate();
    const endDatePrev = new Date(year, month, 0).getDate();

    let datesHtml = '';

    for (let i = start; i > 0; i--) {
        datesHtml += `<li class="inactive">${endDatePrev - i + 1}</li>`;
    }

    for (let i = 1; i <= endDate; i++) {
        let className = (
            i === date.getDate() && 
            month === new Date().getMonth() && 
            year === new Date().getFullYear()
        ) ? ' today' : '';
        datesHtml += `<li class="${className}" data-date="${year}-${month + 1}-${i}">${i}</li>`;
    }

    const end = new Date(year, month + 1, 0).getDay();
    for (let i = end; i < 6; i++) {
        datesHtml += `<li class="inactive">${i - end + 1}</li>`;
    }

    dates.innerHTML = datesHtml;
    header.textContent = `${months[month]} ${year}`;
}

// Handle clicks on dates
function handleDateClick(e) {
    if (e.target.tagName === 'LI' && !e.target.classList.contains('inactive')) {
        const selectedDate = e.target.getAttribute('data-date');
        window.location.href = `../current_day/attendance.html?date=${selectedDate}`; // Redirect to attendance page with the selected date
    }
}

// Add event listeners to navigation buttons
navs.forEach(nav => {
    nav.addEventListener('click', e => {
        const btnId = e.target.id;

        if (btnId === 'prev') {
            month = month === 0 ? 11 : month - 1;
            if (month === 11) year--;
        } else if (btnId === 'next') {
            month = month === 11 ? 0 : month + 1;
            if (month === 0) year++;
        }

        renderCalendar();
    });
});

// Listen for clicks on the dates in the calendar
dates.addEventListener('click', handleDateClick);

// Render the calendar initially
renderCalendar();
