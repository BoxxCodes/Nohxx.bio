function formatarNumero(numero) {
    if (numero >= 1000000) {
        return (numero / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (numero >= 1000) {
        return (numero / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    } else {
        return numero.toString();
    }
}

let contadorArmazenado = localStorage.getItem('contadorVisualizacoes') || 0;

contadorArmazenado = parseInt(contadorArmazenado) + 1;

localStorage.setItem('contadorVisualizacoes', contadorArmazenado);

const contadorFormatado = formatarNumero(contadorArmazenado);

document.getElementById('contador-visualizacoes').textContent = contadorFormatado;
