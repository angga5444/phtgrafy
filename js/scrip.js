// Fitur Scroll To Top
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

scrollTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Validasi Form di halaman Contact
const contactForm = document.getElementById("contactForm");
const errorMsgContainer = document.getElementById("errorMsg");

// Pengecekan agar JS tidak error jika dibuka di halaman selain Contact
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const nameValue = document.getElementById("name").value.trim();
        const emailValue = document.getElementById("email").value.trim();
        const messageValue = document.getElementById("message").value.trim();

        errorMsgContainer.style.display = "none";
        errorMsgContainer.innerHTML = "";
        
        let errors = [];

        // Syarat Validasi
        if (nameValue === "") errors.push("- Nama tidak boleh kosong.");
        
        if (emailValue === "") {
            errors.push("- Email tidak boleh kosong.");
        } else if (!emailValue.includes("@") || !emailValue.includes(".")) {
            errors.push("- Penulisan Email harus menggunakan '@' dan titik (.).");
        }

        if (messageValue === "") errors.push("- Kolom Pesan tidak boleh kosong.");

        // Output Validasi
        if (errors.length > 0) {
            errorMsgContainer.innerHTML = "<strong>Terjadi Kesalahan:</strong><br>" + errors.join("<br>");
            errorMsgContainer.style.display = "block";
        } else {
            alert("Halo " + nameValue + ", pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.");
            contactForm.reset();
        }
    });
}