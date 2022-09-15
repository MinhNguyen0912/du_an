const searchBtn = document.querySelector('.js_search_btn');
const searchBox = document.querySelector('.js_search_box');
const searchBoxChilds = document.querySelectorAll('.js_search_box_child')
const body = document.querySelector('body');
function showSearchBox(){
    searchBox.classList.add('open')
}
function hideSearchBox(){
    searchBox.classList.remove('open')
}
searchBtn.addEventListener('click', showSearchBox);
body.onclick = function(e){
    if(e.target!=searchBtn){
        
        hideSearchBox()
    }
}
searchBox.addEventListener('click',function(e){
    e.stopPropagation()
})

const headerListSubs = document.getElementsByClassName('header_list_sub')
window.onscroll = function(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.getElementById('header').classList.add('scroll_header')
        for(const headerListSub of headerListSubs){
            headerListSub.classList.add('scroll_sub')
        }
        document.getElementById('header_search_items').classList.add('scroll_sub')

    }else{
        document.getElementById('header').classList.remove('scroll_header')
        for(const headerListSub of headerListSubs){
            headerListSub.classList.remove('scroll_sub')
        }
        document.getElementById('header_search_items').classList.remove('scroll_sub')

    }
}