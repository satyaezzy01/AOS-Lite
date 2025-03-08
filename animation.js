document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded!");

    let elements = document.querySelectorAll("[data-aos]"); // Ambil semua elemen dengan data-aos
    console.log(`Found ${elements.length} elements`);

    function animateElements() {
        elements.forEach((el) => {
            let animationType = el.getAttribute("data-aos");
            let delay = parseInt(el.getAttribute("data-delay") || 0); // Ambil delay (default 0 ms)
            let duration = parseInt(el.getAttribute("data-duration") || 800); // Ambil durasi (default 800 ms)
            let rect = el.getBoundingClientRect();
            let inViewport = rect.top < window.innerHeight && rect.bottom > 0; // Cek apakah elemen dalam viewport

            if (inViewport) {
                el.style.opacity = "1";
                el.style.transition = `all ${duration}ms ease ${delay}ms`; // Atur delay + durasi animasi

                if (animationType === "fade-left") {
                    el.style.transform = "translateX(0)";
                } else if (animationType === "fade-right") {
                    el.style.transform = "translateX(0)";
                } else if (animationType === "fade-up") {
                    el.style.transform = "translateY(0)";
                } else if (animationType === "fade-down") {
                    el.style.transform = "translateY(0)";
                } else if (animationType === "opacity") {
                    el.style.transform = "scale(1)";
                }
            } else {
                // Reset animasi agar bisa jalan lagi saat masuk viewport
                el.style.opacity = "0";

                if (animationType === "fade-left") {
                    el.style.transform = "translateX(-50px)";
                } else if (animationType === "fade-right") {
                    el.style.transform = "translateX(50px)";
                } else if (animationType === "fade-up") {
                    el.style.transform = "translateY(50px)";
                } else if (animationType === "fade-down") {
                    el.style.transform = "translateY(-50px)";
                } else if (animationType === "opacity") {
                    el.style.transform = "scale(0.9)";
                }
            }
        });
    }

    // **Jalankan animasi langsung saat halaman di-load**
    animateElements();

    // **Tambahkan event listener untuk mendeteksi scroll**
    window.addEventListener("scroll", animateElements);
});
// data-aos="fade-left" data-delay="300" data-duration="2000"