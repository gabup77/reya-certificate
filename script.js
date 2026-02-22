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

function fetchUser() {
  const username = document.getElementById("username").value;

  if (!username) {
    alert("Enter username");
    return;
  }

  // Simulated data
  document.getElementById("messages").value = Math.floor(Math.random() * 2000);
  document.getElementById("contribution").value =
    "Active Reya contributor on X. Shared threads and insights.";

  alert("User data fetched (demo mode)");
}
