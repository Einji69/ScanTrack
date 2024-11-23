function recordLoginTime(checkbox, timeCellId) {
    const timeCell = document.getElementById(timeCellId);

    if (checkbox.checked) {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        timeCell.textContent = timeString; 
    } else {
        timeCell.textContent = "--:--:--"; 
    }
}
