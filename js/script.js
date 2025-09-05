

<script>.
        const navUl = document.querySelector('nav ul');
        const mobileMenu = document.querySelector('.mobile-menu');
.        mobileMenu.addEventListener('click', toggleMenu);
        function toggleMenu() {
            navUl.classList.toggle('show');
            mobileMenu.classList.toggle('active');
        
        }


        // Fecha o menu ao clicar em um link
        document.querySelectorAll('nav ul li a').forEach(link =>{
            link.addEventListener('click', () => {
                if (navUl.classList.contains('show')) {
                    toggleMenu();
                }
            });
        });

        // Script para o formulário de contato
        document.addEventListener('DOMContentLoaded', () => {
            const contactForm = document.getElementById('contact-form');
            const successMessage = document.getElementById('success-message');

            contactForm.addEventListener('submit', (e) => {
                // Previne o comportamento padrão do formulário de recarregar a página
                e.preventDefault();

                // Simula o envio de dados (aqui você enviaria para um servidor)
                console.log('Formulário enviado!');

                // Exibe a mensagem de sucesso
                successMessage.style.display = 'block';

                // Oculta a mensagem de sucesso após 3 segundos
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 3000);

                // Limpa os campos do formulário
                contactForm.reset();
            });
        });
    </script>