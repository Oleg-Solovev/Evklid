const btnSearch = document.querySelector('.search__btn--js');
const btnClose = document.querySelector('.search-form__close');
const searchForm = document.querySelector('.search-form');

btnSearch.addEventListener('click', () => {
    searchForm.classList.add('search-form--visible');
    btnSearch.classList.add("invisible");
});

btnClose.addEventListener('click', () => {
    searchForm.classList.remove('search-form--visible');
    btnSearch.classList.remove("invisible");
});