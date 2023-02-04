const searchBtn = document.querySelector('#searchBtn');
const closeBtn = 
document.querySelector('#closeBtn');
const searchBox = document.querySelector('.navbar_searchBox');

searchBtn.onclick = function() {
    searchBox.classList.add('active');
    closeBtn.classList.add('active');
    searchBtn.classList.add('active');
}

closeBtn.onclick = function() {
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
}