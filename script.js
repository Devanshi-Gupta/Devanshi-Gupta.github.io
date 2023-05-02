console.log("script");
document.querySelector('.close').style.display ='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.close').style.display ='none';
        document.querySelector('.menu').style.display ='inline';
        document.querySelector('.mail').style.display ='inline';
        document.querySelector('.github').style.display ='inline';
        
    }else{
        document.querySelector('.menu').style.display ='none';
        document.querySelector('.mail').style.display ='none';
        document.querySelector('.github').style.display ='none';
        setTimeout(()=>{
        document.querySelector('.close').style.display ='inline';
        },300)
    }
})

const sectionTitle=document.querySelector('.sectionTitle');
sectionTitle.addEventListener('click',()=>{
    window.scrollTo({
        top: document.querySelector('.workExperience').offsetTop,
        behavior:'smooth'
    });
});

function readMoreFunctionDeploymentProject() {
    var dots = document.getElementById("dotsDeployment");
    var moreText = document.getElementById("moreDeployment");
    var btnText = document.getElementById("myBtnDeployment");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  function readMoreFunctionAttainmentProject() {
    var dots = document.getElementById("dotsAttainment");
    var moreText = document.getElementById("moreAttainment");
    var btnText = document.getElementById("myBtnAttainment");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  function readMoreFunctionPDFProject() {
    var dots = document.getElementById("dotsPdf");
    var moreText = document.getElementById("morePdf");
    var btnText = document.getElementById("myBtnPdf");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  function readMoreFunctionCyberProject() {
    var dots = document.getElementById("dotsCyber");
    var moreText = document.getElementById("moreCyber");
    var btnText = document.getElementById("myBtnCyber");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  function readMoreFunctionLibraryProject() {
    var dots = document.getElementById("dotsLibrary");
    var moreText = document.getElementById("moreLibrary");
    var btnText = document.getElementById("myBtnLibrary");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  function readMoreFunctionCafeProject() {
    var dots = document.getElementById("dotsCafe");
    var moreText = document.getElementById("moreCafe");
    var btnText = document.getElementById("myBtnCafe");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }