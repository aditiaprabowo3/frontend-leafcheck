const Home = {
    async render() {
        return `
        <fitur-content></fitur-content>
        <testimonial-content></testimonial-content>
        <qna-content></qna-content>
        <getstarted-content></getstarted-content>
        <footer-content></footer-content>
    `;
    },

    async afterRender() {
        const header = document.querySelector("header");
        header.style.display = "block";

        // faq 
        const faqElements = document.querySelectorAll('.content-item');

        faqElements.forEach((faq) => {
            faq.addEventListener('click', () => {
                faq.classList.toggle('active');
            });
        });

        // navbar scroll
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('header nav a');

        window.onscroll = () => {
            const scrollY = window.scrollY;

            sections.forEach(sec => {
                const offset = sec.offsetTop - 150;
                const height = sec.offsetHeight;
                const id = sec.getAttribute('id');
                const link = document.querySelector('header nav a[href="#' + id + '"]');

                if (scrollY >= offset && scrollY < offset + height) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                    });
                    if (link) {
                        link.classList.add('active');
                    }
                }
            });
        };
    },
};

export default Home;