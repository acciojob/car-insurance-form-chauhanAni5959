document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("carForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent real submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const carAge = document.getElementById("carage").value.trim();
    const dop = document.getElementById("dop").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!name || !email || !carAge || !dop || !password) {
      alert("⚠️ Please fill in all required fields.");
      return;
    }

    alert(`✅ Thank you, ${name}! Your Car Insurance Registration has been submitted.`);
    form.reset();
  });
});
