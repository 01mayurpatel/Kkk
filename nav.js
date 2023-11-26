var $btn = document.getElementById('show');
var $nav = document.getElementById('nav');
var flag = false;
var X = document.getElementById('fa-x');
var bars = document.getElementById('fa-bars');

// document.getElementById('vid').play();


$btn.addEventListener('click', function() {
    $nav.classList.toggle('active');
    if(flag == false){
        bars.style.display='none';
        X.style.display = 'block';
        flag = true;
    }else{
        bars.style.display='block';
        X.style.display = 'none';
        flag = false;
    }
});