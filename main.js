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
const logInBtns = document.querySelectorAll('.js_log-in')
const signInBtns = document.querySelectorAll('.js_sign-in')
const modalLogIn = document.querySelector('.modal_sign-in')
const modalSignIn = document.querySelector('.modal_log-in')
const modalMain = document.querySelector('.modal_main')
const changeSignInBtn = document.querySelector('.js_change-sign-in')
const changeLogInBtn = document.querySelector('.js_change-log-in')
const stopProps = document.querySelectorAll('.js_stopProps')
const backBtns = document.querySelectorAll('.js_back')

changeLogInBtn.addEventListener('click', changeLogIn)
changeSignInBtn.addEventListener('click', changeSignIn)
for(const logInBtn of logInBtns){
    logInBtn.addEventListener('click', openLogIn)
}
function openLogIn(){
    modalMain.classList.add('open')
    modalLogIn.classList.add('open_modal')
    modalSignIn.classList.remove('open_modal')
}
for(const signInBtn of signInBtns){
    signInBtn.addEventListener('click', openSignIn)
}
function openSignIn(){
    modalMain.classList.add('open')
    modalSignIn.classList.add('open_modal')
    modalLogIn.classList.remove('open_modal')
}

function changeLogIn(){
    modalLogIn.classList.add('open_modal')
    modalSignIn.classList.remove('open_modal')

}
function changeSignIn(){
    modalSignIn.classList.add('open_modal')
    modalLogIn.classList.remove('open_modal')

}
for(const stopProp of stopProps){
    stopProp.addEventListener('click', function(event){
        event.stopPropagation()
    })
}
modalMain.addEventListener('click', function(){
    modalMain.classList.remove('open')
    modalSignIn.classList.remove('open_modal')
    modalLogIn.classList.remove('open_modal')
})
for(const backBtn of backBtns){
    backBtn.addEventListener('click',function(){
        modalMain.classList.remove('open')
        modalSignIn.classList.remove('open_modal')
        modalLogIn.classList.remove('open_modal')
    })
}