window.addEventListener("scroll",function(){
    console.log(window.pageYOffset)

    // 주어.style.transform = translateY()
    let scrollTop = window.pageYOffset;
    document.querySelector(".pic0").style.transform = "translateY("+ scrollTop / 1 +"px)";
    document.querySelector(".pic1").style.transform = "translateY("+ scrollTop / 3 +"px)";
    document.querySelector(".pic2").style.transform = "translateY("+ scrollTop / 1 +"px)";
    document.querySelector(".pic3").style.transform = "translateY("+ scrollTop / 6 +"px)";
    document.querySelector(".pic4").style.transform = "translateY("+ scrollTop / 15 +"px)";
    document.querySelector(".pic5").style.transform = "translateY("+ scrollTop / 16 +"px)";
    document.querySelector(".pic6").style.transform = "translateY("+ scrollTop / 26 +"px)";
    document.querySelector(".pic7").style.transform = "translateY("+ scrollTop / 60 +"px)";
    document.querySelector(".pic8").style.transform = "translateY("+ scrollTop / 20 +"px)";

});