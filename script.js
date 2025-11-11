const steps = document.querySelectorAll(".form-step");
const progressBar = document.getElementById("progressBar");
const stepIndicators = document.querySelectorAll(".step");

let currentStep = 1;
const totalSteps = 6;

// Navigation handler
function goToStep(step) {
  steps.forEach((s, i) => s.classList.toggle("active", i === step - 1));
  stepIndicators.forEach((dot, i) => dot.classList.toggle("active", i < step));

  const progressPercent = (step / totalSteps) * 100;
  progressBar.style.width = `${progressPercent}%`;
  currentStep = step;
}

// Navigation buttons
document.getElementById("next1").onclick = () => goToStep(2);
document.getElementById("next2").onclick = () => goToStep(3);
document.getElementById("next3").onclick = () => goToStep(4);
document.getElementById("next4").onclick = () => {
  // Populate review summary before going to step 5
  const summary = `
    <strong>Name:</strong> ${document.getElementById("fullName").value}<br>
    <strong>Email:</strong> ${document.getElementById("email").value}<br>
    <strong>Phone:</strong> ${document.getElementById("phone").value}<br><br>
    <strong>Address:</strong><br>
    ${document.getElementById("address").value}, 
    ${document.getElementById("city").value}, 
    ${document.getElementById("state").value} 
    ${document.getElementById("zip").value}, 
    ${document.getElementById("country").value}<br><br>
    <strong>Payment:</strong> **** **** **** ${document.getElementById("cardNumber").value.slice(-4)}
  `;
  document.getElementById("reviewSummary").innerHTML = summary;
  goToStep(5);
};
document.getElementById("submitBtn").onclick = () => {
  goToStep(6);
  const msg = document.getElementById("finalMessage");
  msg.textContent = "Processing your order...";
  setTimeout(() => {
    const success = Math.random() > 0.2; // Simulated 80% success
    msg.textContent = success ? "✅ Payment Successful!" : "❌ Payment Failed!";
  }, 1500);
};
document.getElementById("restartBtn").onclick = () => goToStep(1);

// Back buttons
document.getElementById("back2").onclick = () => goToStep(1);
document.getElementById("back3").onclick = () => goToStep(2);
document.getElementById("back4").onclick = () => goToStep(3);
document.getElementById("back5").onclick = () => goToStep(4);
