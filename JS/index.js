var typed = new Typed('#wordChange', {
    strings: ['Growth.', 'prosperity.','greatness.'],
    typeSpeed: 150,
    backSpeed:150,
    loop:true,
  });

  const body = document.body;
  let lastScroll= 0;

  function changeBg(){
    let navbar = document.getElementById("navbar");
    let scollValue=window.scrollY;
    if (scollValue<10){
      navbar.classList.remove("changecolor");
    }
    else{
      navbar.classList.add("changecolor");
    }
  }
  window.addEventListener("scroll",changeBg);

  window.addEventListener('scroll',()=>{
    const currentscroll =window.pageYOffset;
    if (currentscroll<=0){
      body.classList.remove("scroll-up")
    }
    
    if(currentscroll>lastScroll && !body.classList.contains("scroll-down")){
      body.classList.remove('scroll-up');
      body.classList.add('scroll-down');
    }
    if(currentscroll<lastScroll && body.classList.contains("scroll-down")){
      body.classList.remove('scroll-down');
      body.classList.add('scroll-up');
    }
    lastScroll= currentscroll;
  });

  //back to top JS
  function scrollers(){
    let back = document.getElementById("back");
    let move = window.scrollY;
    if(move<100){
      back.classList.remove("backTopshow");
      back.classList.add("backTop-remove");
    }
    else{
      back.classList.add("backTopshow");
      back.classList.remove("backTop-remove");

    }
  }
  window.addEventListener("scroll" , scrollers);

  //video player
  let video = document.querySelector("#video");
  let playButton = document.querySelector("#play");

  function playvideo(){
    video.play()
    playButton.classList.add("fa-pause")
    playButton.classList.remove("fa-play")
  }
  function pausevideo(){
    video.pause()
    playButton.classList.add("fa-play")
    playButton.classList.remove("fa-pause")
  }
  playButton.addEventListener("click",()=>{
    if(playButton.classList.contains("fa-pause")){
      pausevideo()
    }
    else if(playButton.classList.contains("fa-play")){
      playvideo()
    }
  });
   
  $(document).ready(function(){
    $("#mod").addClass("modals-show").fadeIn("slow").removeClass("modals-hide").prev().css({filter:"blur(5px)"});
    $("#cancel",".accept").on("click", ()=>{
    $("#mod").removeClass("modals-show").addClass("modals-hide");
    let blurs =true;
    if(blurs){
      $("body").css({filter:"blur(10px)"})
    }
    })
  })