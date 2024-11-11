// Animaciones para los links del navbar y los títulos
const links = document.querySelectorAll('nav ul li a');
const titles = document.querySelectorAll('h1, h2, h3');

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transition = 'color 0.3s ease-in-out';
        link.style.color = '#FF8000';
    });

    link.addEventListener('mouseout', () => {
        link.style.color = '#FFF';
    });
});

titles.forEach(title => {
    title.addEventListener('mouseover', () => {
        title.style.cursor = 'pointer';
        title.style.transform = 'scale(1.1)';
    });

    title.addEventListener('mouseout', () => {
        title.style.transform = 'scale(1)';
    });
});
