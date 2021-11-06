
 const searchForm = document.querySelector('.search-form')
 const Btn = document.getElementById('search-btn');

Btn.addEventListener('click', () => {
     searchForm.classList.toggle('active');
     navbar.classList.remove('active');
})

 const navbar = document.querySelector('.navbar')
 const menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', () => {
     navbar.classList.toggle('active');
     searchForm.classList.remove('active')
})

window.onscroll = ()=>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}
