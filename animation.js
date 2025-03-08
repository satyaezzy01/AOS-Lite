document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded!");

    let elements = document.querySelectorAll("[data-aos]"); // Ambil semua elemen dengan data-aos
    console.log(`Found ${elements.length} elements`);

    function setInitialState() {
        elements.forEach((el) => {
            let animationType = el.getAttribute("data-aos");

            el.style.opacity = "0"; // Awalnya transparan

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
        });
    }

    function animateElements() {
        elements.forEach((el) => {
            let animationType = el.getAttribute("data-aos");
            let delay = parseInt(el.getAttribute("data-delay") || 0); // Default delay 0 ms
            let duration = parseInt(el.getAttribute("data-duration") || 800); // Default durasi 800 ms
            let rect = el.getBoundingClientRect();
            let inViewport = rect.top < window.innerHeight && rect.bottom > 0; // Cek apakah elemen dalam viewport

            if (inViewport) {
                el.style.opacity = "1";
                el.style.transition = `all ${duration}ms ease ${delay}ms`; // Atur delay + durasi animasi

                if (animationType === "fade-left" || animationType === "fade-right") {
                    el.style.transform = "translateX(0)";
                } else if (animationType === "fade-up" || animationType === "fade-down") {
                    el.style.transform = "translateY(0)";
                } else if (animationType === "opacity") {
                    el.style.transform = "scale(1)";
                }
            }
        });
    }

    // **Set posisi awal elemen sebelum animasi dijalankan**
    setInitialState();

    // **Jalankan animasi langsung saat halaman di-load**
    animateElements();

    // **Tambahkan event listener untuk scroll agar animasi berjalan saat elemen masuk viewport**
    window.addEventListener("scroll", animateElements);
});
