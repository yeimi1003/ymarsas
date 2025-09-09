document.addEventListener("DOMContentLoaded", function() {
    console.log("¡La página Ymarsas ha sido cargada con éxito!");

    // Smooth Scroll para los enlaces del menú
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Funcionalidad para la sección FAQ (Preguntas Frecuentes)
    const faqItems = document.querySelectorAll('.faq-item h3');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentElement;
            parent.classList.toggle('active'); // Alterna la clase 'active'

            const answer = parent.querySelector('.faq-answer');
            if (parent.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + "px"; // Expande la respuesta
            } else {
                answer.style.maxHeight = "0"; // Colapsa la respuesta
            }
        });
    });

    // Carrusel de Testimonios (muy básico, se puede mejorar)
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    if (testimonialCarousel && testimonialCards.length > 1) {
        let currentIndex = 0;

        function showTestimonial(index) {
            testimonialCards.forEach((card, i) => {
                if (i === index) {
                    card.style.display = 'block';
                    card.style.opacity = '1';
                } else {
                    card.style.display = 'none';
                    card.style.opacity = '0';
                }
            });
        }

        // Mostrar el primer testimonio al cargar
        showTestimonial(currentIndex);

        // Opcional: Auto-avance del carrusel (cada 5 segundos)
        setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonialCards.length;
            showTestimonial(currentIndex);
        }, 5000);
    }
});