function generateCertificate() {
  const name = document.getElementById("nameInput").value;
  const today = new Date().toLocaleDateString();

  if (name.trim() === "") {
    alert("Please enter your name");
    return;
  }

  document.getElementById("certName").innerText = name;
  document.getElementById("date").innerText = today;
}

function downloadPNG() {
  const certificate = document.getElementById("certificate");

  html2canvas(certificate, {
    scale: 3,
    backgroundColor: null
  }).then(canvas => {
    const link = document.createElement("a");
    link.download = "Reya-Certificate.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}
