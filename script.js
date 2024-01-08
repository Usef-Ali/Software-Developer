const navbar =document.getElementById('navbar');
window.onscroll=function () {
    if (document.body.scrollTop>20|| document.documentElement.scrollTop>20) {
        navbar.classList.add('active')
    }else{
        navbar.classList.remove('active')

    }
}