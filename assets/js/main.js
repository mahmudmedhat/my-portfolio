
 
 const navMenu=document.getElementById('nav-menu'),
    navToggel=document.getElementById('nav-toggle'),
     navClose=document.getElementById('nav-clos')


if(navToggel){
    navToggel.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink=document.querySelectorAll('.nav-link')
const linkAction=()=> {
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))





const blurHeader=() =>{
    const header=document.getElementById("header")
    this.scrollY >= 50 ? header.classList.add("blur-header")
    :header.classList.remove("blur-header")
}
window.addEventListener("scroll" ,blurHeader)




/*const contactFrom=document.getElementById('contact-form'),
        contactMassage=document.getElementById('contact-massage')

const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendFrom('service_8aj57ri', 'template_12044y7', '#contact-form','HE8KGjru-PKgWYJ7z')
    .then(() => {
        contactMassage.textContent = 'Massage sent successfully'
    } , 
    () => {
        contactMassage.textContent = 'Massage not sent (service error)'
    })
}

contactFrom.addEventListener('submit',sendEmail)*/








const scrollUp =() =>{
const scrollUp=document.getElementById("scroll-up")
this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
:scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)





/*const sections=document.querySelectorAll("section[id]")
const scrollActive=() => {
    const scrollY = window.pageYOffset
    sections.forEach( current =>{
        const sectionHeight=current.offsetHeight,
        sectionTop=current.offsetHeight - 58,
        sectionId=current.getAttribute('id'),
        sectionClass=document.querySelector('.nav-menu a[href*=' + sectionId +']')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')

        }else
        {
            sectionClass.classList.remove('active-link')
              }
    })
}
window.addEventListener('scroll', scrollActive)*/






const sr=ScrollReveal(
    {
        origin:'top',
        distance:'60px',
        duration:2500,
        delay:400,
        reset:true
    }
)
            sr.reveal('.home-data, .home-social,.footer-container,.contact-container ')
            sr.reveal('.home-image', {origin: 'bottom '})
            sr.reveal('.about-data, .skills-data',{origin:"left"})
            sr.reveal('.about-image,.skills-content' ,{origin: 'right '})
            sr.reveal('.Services-card,.project-card', {interval: 100})