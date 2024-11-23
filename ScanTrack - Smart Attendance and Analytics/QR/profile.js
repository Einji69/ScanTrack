const profileImageInput = document.getElementById("profileImageInput");
const profileImage = document.getElementById("profileImage");

profileImageInput.addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            profileImage.src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});
function generateQRCode(data) {
    const qrCodeImage = document.getElementById("qrCode");
    qrCodeImage.src = "https://api.qrserver.com/v1/create-qr-code/?data=profileID12345&size=150x150";
}
generateQRCode("profileID12345");
