var burger=document.querySelector(".site-list-actions__close"),header=document.querySelector(".page-header"),sitelist=document.querySelector(".site-list"),wrapper=document.querySelector(".page-header-wrapper"),menu=document.querySelector(".site-list-actions__menu"),menutoggle=function(){sitelist.classList.toggle("site-list--show"),header.classList.toggle("page-header--show"),burger.classList.toggle("site-list-actions__close--show"),wrapper.classList.toggle("page-header-wrapper--show"),menu.classList.toggle("site-list-actions__menu--open")};menutoggle(),burger.addEventListener("click",function(){menutoggle(),menu.classList.toggle("site-list-actions__menu--no-cross")});