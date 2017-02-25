
function init() {
    var nav=document.getElementById('nav');
    var titleImg=document.getElementById('titleImg');
    var titleImgWidth=window.innerWidth-15 +'px';
    var navHeight=39;
    var padTitleImg=15;
    var ogWidth=5530;
    var ogHeight=1277;
    var widthRatio=titleImgWidth.match(/\d+/)[0]/ogWidth;
    titleImgHeight=ogHeight*widthRatio;

    titleImg.style.width=titleImgWidth;
    nav.style.top=(titleImgHeight+padTitleImg-navHeight)/1.2+'px';
    var navYPos=(titleImgHeight+padTitleImg-navHeight)/1.2;
    var navNewYPos=titleImgHeight+padTitleImg;
    //console.log(titleImgHeight+padTitleImg-navYPos);
}

window.onload = init;
window.onresize = init;

document.getElementById('fullPage').onscroll = () => {
    var nav=document.getElementById('nav');
    var titleImg=document.getElementById('titleImg');
    var titleImgWidth=window.innerWidth-15 +'px';
    var navHeight=39;
    var padTitleImg=15;
    var ogWidth=5530;
    var ogHeight=1277;
    var widthRatio=titleImgWidth.match(/\d+/)[0]/ogWidth;
    titleImgHeight=ogHeight*widthRatio;

    titleImg.style.width=titleImgWidth;
    nav.style.top=(titleImgHeight+padTitleImg-navHeight)/1.2+'px';
    var navYPos=(titleImgHeight+padTitleImg-navHeight)/1.2;
    var navNewYPos=titleImgHeight+padTitleImg;
    
    var fullPage = document.getElementById('fullPage');
    if (fullPage.scrollTop>titleImgHeight+padTitleImg-navYPos && fullPage.scrollTop<titleImgHeight+padTitleImg){
      nav.style.position="absolute";
      nav.style.top=navNewYPos+"px";
  }
  else if(fullPage.scrollTop>titleImgHeight+padTitleImg){
      nav.style.position="fixed";
      nav.style.top="0px";
  }
  else {
      nav.style.position="fixed";
      nav.style.top=(titleImgHeight+padTitleImg-navHeight)/1.2+'px';
  }
};