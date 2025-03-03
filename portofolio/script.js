// Smooth scrolling untuk navigasi
document.querySelectorAll('nav .nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Pesan Anda telah terkirim!');
    // Anda bisa menambahkan kode untuk mengirim data formulir ke server di sini
});