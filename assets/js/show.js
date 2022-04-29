function showDangky(){
    document.getElementById('modal').style.display="block";
    document.getElementById('modal__overlay').style.display='block';
    document.getElementById('modal__body').style.display='block';
    document.getElementById('auth-form').style.display='block';

}
function closeDangky(){
    document.getElementById('modal').style.display='none';
    document.getElementById('modal__overlay').style.display='none';
    document.getElementById('modal__body').style.display='none';
    document.getElementById('auth-form').style.display='none';
}
function showDangnhap(){
    document.getElementById('modal').style.display="block";
    document.getElementById('modal__overlay').style.display='block';
    document.getElementById('modal__body').style.display='block';
    document.getElementById('auth-form-dangnhap').style.display='block';

}
function closeDangnhap(){
    document.getElementById('modal').style.display='none';
    document.getElementById('modal__overlay').style.display='none';
    document.getElementById('modal__body').style.display='none';
    document.getElementById('auth-form-dangnhap').style.display='none';
}

var ulElement = document.querySelector('.header__search-history-list');
ulElement.onmousedown=function(e){
    e.preventDefault();
}