const container = document.getElementById('container')

function click(event) {
    if (event.target.className != 'remove-button') return;
    let pane = event.target.closest('.pane');
    pane.remove();
};

container.addEventListener('click', e => click(e))