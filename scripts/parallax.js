function aplicarParalaxe(seletor, intensidade = 1) {
    const elemento = document.querySelector(seletor);
    if (!elemento) return;

    const dispositivoMovel = window.matchMedia("(max-width: 768px)").matches;
    if (dispositivoMovel) {
        elemento.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        return;
    }

    elemento.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';

    const moverMouse = (evento) => {
        const retangulo = elemento.getBoundingClientRect();
        const deslocamentoX = (evento.clientX - retangulo.left) / retangulo.width - 0.5;
        const deslocamentoY = (evento.clientY - retangulo.top) / retangulo.height - 0.5;

        const inclinacaoX = deslocamentoX * 35 * intensidade;
        const inclinacaoY = -deslocamentoY * 35 * intensidade;

        const centro = Math.abs(inclinacaoX) + Math.abs(inclinacaoY);

        requestAnimationFrame(() => {
            elemento.style.transform = `translate(-50%, -50%) perspective(1000px) rotateX(${inclinacaoY}deg) rotateY(${inclinacaoX}deg) scale3d(1, 1, ${1 + (centro / 80) * intensidade})`;
        });
    };

    const sairMouse = () => {
        elemento.style.transition = 'transform 0.25s ease-out';
        elemento.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };

    elemento.addEventListener('mousemove', moverMouse);
    elemento.addEventListener('mouseleave', sairMouse);

    return () => {
        elemento.removeEventListener('mousemove', moverMouse);
        elemento.removeEventListener('mouseleave', sairMouse);
    };
}

aplicarParalaxe('.square', 1);
aplicarParalaxe('.square-main', 0.5);
