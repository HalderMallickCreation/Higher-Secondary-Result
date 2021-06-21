// making function //
const navSlide =() => {
  const mobile3dot = document.querySelector('.mobile3dot ');
  const nav = document.
   //linking function//
  querySelector('.nav-links');
  const navLinks =document.querySelectorAll('.nav-links li');

 
  mobile3dot.addEventListener('click',()=>{
   ///toggle nav 1 ///
    nav.classList.toggle('nav-active');
    nav.classList.toggle('nav-links-active');
      // Animate Links  //
  navLinks.forEach((link,index)=>{
    if (link.style.animation){
        link.style.animation='';
    } 
    else {
     link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.7 }s`;
     console.log(index/7 + 1.5);
       }
    });
  // Mobile 3 dot Animation //
    mobile3dot.classList.toggle('toggle');
  });

}


//function manager//
const app=()=>{
  navSlide();
}
app()
