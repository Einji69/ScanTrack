document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'flex';
    }, 2000); 
    document.getElementById('logout-button').addEventListener('click', () => {
        
       
        window.location.href = '../LogIn Teacher/index.html';
    });
    
});
