let id = localStorage.getItem('id');
id = parseInt(id);

const okcw = document.getElementById('okcw');

function renderCrossword(id) {
    okcw.setAttribute('src', crosswords[id]);
    
};

renderCrossword(id);