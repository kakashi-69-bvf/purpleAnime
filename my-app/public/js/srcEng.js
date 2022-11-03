const resBody=document.getElementById("srcBody");
const inp=document.getElementById("srcInp");
var srcInp,abs,comp,res,time=true;
const anime=["Death Note","Naruto","Naruto Shippuden","One Piece","Rent a Girlfriend","Darling in the Franxx","Sword Art Online","Fruits Basket","Demon Slayer","Domestic Girlfriend","Golden Time","Oregairu","Future Diary","Violet Evergarden","Spy X Family","My hero Academia","Attack on Titan","One Puncn Man","Dragon Ball","Dragon Ball Z","Dragon Ball Super","Jujutsu Kaisen","Boruto","Boruto: Naruto Next Generation","Sankarea","Please Sensei!","Why the hell are you here Sensei!","Plastic Memory","Komi can\'t communicate","Your lie in april","And you thought there is never a girl online","Re Zero","Weathering with you","A Silent Voice","I want to eat your pancreas","Demon Slayer Mugen Train","Shikioriori","Patema inverted","Whisper of the heart","The girl who hears lost voices","A whisker away","Grave of the fireflies","Spirited Away","Forest of the fireflies\' light","Garden of Words","Josse the tiger and the fish","Ski the Infinity","Devil\'s line","86","The millionaire defective","Noragami","Haikyu","Ao Ashi","The quintessential quinteplets","Ao haru ride","Oregaeru","Link Click","The misfit demon academy","Rising of the sheild hero","Spirit Chronicles"];
const lodingOfSrc=document.getElementById("lodingOfSrc");

let searched=new Array()




function search()
{
    if(window.scrollY==0 && inp.value!=null && inp.value!="") {
        window.scrollBy({top: 200, behavior: "smooth"})
    }
    lodingOfSrc.style.display="inline-block"



    setTimeout(()=> {
        resBody.innerHTML=null;
        abs=new Array();
        comp=new Array();
        srcInp=inp.value;

        console.log(srcInp+'shit\n\n ');
        for(let i=0;i<anime.length;i++)//
        {
            var a=(anime[i].toLowerCase()).replaceAll(" ",""),b=(srcInp.toLowerCase()).replaceAll(" ",""),x,y;
            x=((a.length)>(b.length)||(a.length)==(b.length))?a:b;
            y=((a.length)<(b.length))?a:b;

            if(b.indexOf(a)!=-1) {
                res=0;
            } else {
                for(let j=0;j<x.length;j++)
                {
                    res+=((x.charCodeAt(j))-(y.charCodeAt(j)));
                }  
            }
            if(res==0) {
                abs.push(anime[i]);
                searched.push(anime[i])
            } else if(res>=-13 && res>=13) {
                comp.push(anime[i]);
                searched.push(anime[i])
            }
        }//
        console.log(abs);
        console.log(comp);
        lodingOfSrc.style.display="none";

        if(inp.value==null || inp.value=="") {
            resBody.style.display="none";
        }else {
            resBody.style.display="flex";
        }

        createResult(abs);
        createResult(comp);

        if(abs.length==0 && comp.length==0 && resBody.hasChildNodes()==false) {
            resBody.innerHTML="No results found!";
            if(resBody.innerHTML=="No results found!") {
                resBody.style.justifyContent="center";
            }else {
                resBody.style.justifyContent="unset";
            }
            resBody.style.color="#9d00ff";
        }
    },500);
    if(inp.value!=null) {
        resBody.innerHTML="";
    }
    if(window.scrollY==0 && inp.value!=null && inp.value!="") {
        window.scrollBy({top: 300, behavior: "smooth"});
    }
    console.log(searched);


}


function createResult(arrayList) {
    for(let i=0;i<arrayList.length;i++)
    {
        var perResult=document.createElement("div");
        var ancor=document.createElement("a");
        ancor.setAttribute("href",(arrayList[i].replaceAll(" ","")).toLowerCase()+".html");
        ancor.appendChild(perResult);
        resBody.appendChild(ancor);
        perResult.setAttribute("class","perResult");
        var imgInRes=document.createElement("img");
        imgInRes.setAttribute("src",`posterSrc/${arrayList[i]}.jpg`);
        imgInRes.setAttribute("alt","");
        perResult.appendChild(imgInRes);
        perResult.innerHTML+=arrayList[i];
    }
}



