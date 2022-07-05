const center = document.getElementById('center');
localStorage.clear();

center.onclick = (e) =>{
    if(e.target.classList.contains('okButton')){
        let id = e.target.id;
        id = id.split('');
        id.shift();
        id = id.join('');
        
        window.location.href = './ok.html'
        localStorage.setItem('id', id);
    }
};