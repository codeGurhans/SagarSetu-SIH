gsap.from("#route_btn",{ 
  x:-200,
  duration: 2,   
  opacity: 0,    
  ease: "power1.inOut"
});

gsap.from("#donate_btn",{ 
  x:-200,
  duration: 2,   
  opacity: 0,    
  ease: "power1.inOut"
});

gsap.from("#more",{ 
  x:-200,
  duration: 2,  
  opacity: 0,    
  ease: "power1.inOut"
});

gsap.from(".navbar-brand",{ 
  x:-200,
  duration: 2,   
  opacity: 0,    
  ease: "power1.inOut"
});

gsap.from("#video-container video",{ 
  duration: 2,   
  opacity: 0.5,    
  ease: "power1.inOut"
});

gsap.from("#searchbox", { 
  duration: 2,   
  x: 200,          
  opacity: 0,       
  ease: "power2.out" 
});

gsap.from("#searchbutton", { 
  duration: 2,    
  x: 200,           
  opacity: 0,      
  ease: "power2.out" 
});

gsap.from("#first", { 
  duration: 2,   
  y: -200,          
  opacity: 0,      
  ease: "power2.out" 
});

gsap.from("#second", { 
  duration: 2,    
  y: 200,           
  opacity: 0,       
  ease: "power2.out" 
});
gsap.from("#makeInIndia img", { 
  duration: 2,    
  x: -250,        
  opacity: 0,       
  ease: "power2.out" 
});




// var crsr = document.querySelector("#cursor");
// var blur = document.querySelector("#cursor-blur");

// document.addEventListener("mousemove", function (dets) {
//   crsr.style.left = dets.x + "px";
//   crsr.style.top = dets.y + "px";
//   blur.style.left = dets.x - 250 + "px";
//   blur.style.top = dets.y - 250 + "px";
// });

// var h4all = document.querySelectorAll("#nav h4");
// h4all.forEach(function (elem) {
//   elem.addEventListener("mouseenter", function () {
//     crsr.style.scale = 3;
//     crsr.style.border = "1px solid #fff";
//     crsr.style.backgroundColor = "transparent";
//   });
//   elem.addEventListener("mouseleave", function () {
//     crsr.style.scale = 1;
//     crsr.style.border = "0px solid #95C11E";
//     crsr.style.backgroundColor = "#95C11E";
//   });
// });

document.addEventListener('mousemove', function(e) {
  const cursor = document.querySelector('.ship');
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});