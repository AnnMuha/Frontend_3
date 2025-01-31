const blocks = document.querySelectorAll('.block');
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

// ініцілізація кожного блока (координата, швидкість)
const blockData = Array.from(blocks).map(block => ({
    element: block,
    x: Math.random() * (windowWidth - 50),
    y: Math.random() * (windowHeight - 50),
    dx: (Math.random() * 2 + 1) * (Math.random() > 0.5 ? 1 : -1),
    dy: (Math.random() * 2 + 1) * (Math.random() > 0.5 ? 1 : -1)
}));

function moveBlocks() {
    blockData.forEach(data => {
        data.x += data.dx;
        data.y += data.dy;
        // Перевірка на досягнення меж екрану
        if (data.x <= 0 || data.x >= windowWidth - 50) {
            data.dx *= -1; // Зміна напрямку руху по x
        }
        if (data.y <= 0 || data.y >= windowHeight - 50) {
            data.dy *= -1; // Зміна напрямку руху по y
        }

        data.element.style.left = `${data.x}px`;
        data.element.style.top = `${data.y}px`;
    });
}

setInterval(moveBlocks, 20);