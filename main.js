// menu show your hidden

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

    // Show Menu
    /* VALIDATION if constant exsists */

    if(navToggle ){
        navToggle.addEventListener('click', () => {
          navMenu.classList.add('show-menu')
        } ) 
    }

    // menu hidden

    if(navClose){
        navClose.addEventListener('click', () => {
          navMenu.classList.remove('show-menu')
        })
    }
    /* Remove mobile menu */

    const navLink = document.querySelectorAll('.nav__link')

    function linkAction(){
        const navMenu = document.getElementById('nav-menu')
        //when we click on each nav_link we remove the show-menu class
        navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click',linkAction) )