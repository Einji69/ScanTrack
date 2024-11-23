function generateQRCode() {
    const adminName = document.getElementById("adminName").value;
    
    if (adminName === "") {
        alert("Please enter an admin name.");
        return;
    }
    
    // Clear any previously generated QR codes
    document.getElementById("qrCodeContainer").innerHTML = "";

    // Generate the QR code based on the admin name
    const qrCode = new QRCode(document.getElementById("qrCodeContainer"), {
        text: adminName,   // Text to be encoded in the QR code (admin's name)
        width: 128,        // Width of the QR code
        height: 128,       // Height of the QR code
        colorDark: "#000000",  // Dark color (black)
        colorLight: "#ffffff", // Light color (white)
        correctLevel: QRCode.CorrectLevel.H // Error correction level
    });
}
