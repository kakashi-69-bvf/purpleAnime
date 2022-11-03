import pic0 from "./posters/IMG_20220711_230134_426.jpg";
import pic1 from "./posters/IMG_20220711_230142_609.jpg";
import pic2 from "./posters/IMG_20220711_230151_369.jpg";
import pic3 from "./posters/IMG_20220711_230220_200.jpg";
import pic4 from "./posters/IMG_20220711_230227_261.jpg";
import pic5 from "./posters/IMG_20220722_232450_162.jpg";

const banner=[pic0,pic1,pic2,pic3,pic4,pic5];
const bannerRec=document.getElementsByClassName("d-block");
const carouselInner=document.getElementById("carousel-inner");


for(let i=0;i<=banner.length;i++) {
    carouselInner.children[i].classList("d-block").style.content=banner[i];
}