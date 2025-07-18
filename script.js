<script>
document.addEventListener("DOMContentLoaded", function () {
  // Greet user
  const greeting = document.getElementById("greeting");
  const userName = prompt("Masukkan nama kamu:");
  if (userName) {
    greeting.textContent = Hi ${userName}, Welcome To Website;
  }

  // Handle form submission
  const form = document.getElementById("contactForm");
  const result = document.getElementById("formResult");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Cegah reload

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("messageInput").value.trim();
    const genderInput = document.querySelector('input[name="gender"]:checked');

    // Validasi semua kolom
    if (!name || !email || !phone || !message || !genderInput) {
      alert("Semua kolom wajib diisi!");
      return;
    }

    // Validasi nomor telepon harus angka
    if (!/^\d+$/.test(phone)) {
      alert("Nomor telepon harus berupa angka saja!");
      return;
    }

    // Output pesan sukses
    const gender = genderInput.value;
    result.textContent = Pesan berhasil dikirim. Terima kasih, ${name} (${gender})!;
    result.style.display = "block";

    // Reset form
    form.reset();

    // Sembunyikan pesan setelah 5 detik
    setTimeout(() => {
      result.style.display = "none";
    }, 5000);
  });
});
</script>