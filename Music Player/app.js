$(document).ready(function() {
    var audio=document.getElementById("audio-control");
  
 $('.buttons .pause').on("click",function(){
document.querySelector(".buttons .pause").classList.add("d-none");
document.querySelector(".buttons .play").classList.remove("d-none");
audio.pause();
})
$('.buttons .play').on("click",function(){
    document.querySelector(".buttons .play").classList.add("d-none");
    document.querySelector(".buttons .pause").classList.remove("d-none");
    
 var audio=document.getElementById("audio-control");
 console.log(audio)
 audio.play();
  
    })
    $(".buttons .next").on("click", function() {
      document.querySelector(".buttons .play").classList.add("d-none");
    document.querySelector(".buttons .pause").classList.remove("d-none");
   
        let id = $(this).attr("data-id");
        let imageSrc=document.querySelector(".music-img img").src;
        let musicSrc=document.querySelector(".audio audio" ).src;
        let musicName=document.querySelector(".info h3" ).innerHTML;
        let singerName=document.querySelector(".info h5" ).innerHTML;
       

         let dataId= parseInt(id);
        dataId+=1
   console.log( dataId)

   if(dataId<music.length){
    let mName=music[dataId].musicName;
    let mSrc=music[dataId].musicSrc;
 let imgSrc=music[dataId].imageSrc;
 let sname=music[dataId].singer;
 document.querySelector(".info h5" ).innerHTML=sname;
 document.querySelector(".music-img img" ).src=imgSrc;
 document.querySelector(".audio audio" ).src=mSrc;
    document.querySelector(".info h3" ).innerHTML=mName;
 
    let dt=dataId.toString();
    // console.log(typeof dt)
   this.setAttribute('data-id', dt);
   document.querySelector(".prew").setAttribute('data-id', dt);
   
   }
   else {
    console.log("last   music")
     dataId=music.length-1;
    let dt=dataId.toString();
    // console.log(typeof dt)
   this.setAttribute('data-id', dt);
   document.querySelector(".prew").setAttribute('data-id', dt);

   }

      
      });
      $(".buttons .prew").on("click", function() {
         document.querySelector(".buttons .play").classList.add("d-none");
         document.querySelector(".buttons .pause").classList.remove("d-none");
        
        let id = $(this).attr("data-id");
        let imageSrc=document.querySelector(".music-img img").src;
        let musicSrc=document.querySelector(".audio audio" ).src;
        let musicName=document.querySelector(".info h3" ).innerHTML;
        let singerName=document.querySelector(".info h5" ).innerHTML;
       

         let dataId= parseInt(id);
        dataId-=1
   console.log( dataId)

   if(dataId<music.length){
    let mName=music[dataId].musicName;
    let mSrc=music[dataId].musicSrc;
 let imgSrc=music[dataId].imageSrc;
 let sname=music[dataId].singer;
 document.querySelector(".info h5" ).innerHTML=sname;
 document.querySelector(".music-img img" ).src=imgSrc;
 document.querySelector(".audio audio" ).src=mSrc;
    document.querySelector(".info h3" ).innerHTML=mName;
 
    let dt=dataId.toString();
    // console.log(typeof dt)
   this.setAttribute('data-id', dt);
   document.querySelector(".next").setAttribute('data-id', dt);
   
   }
   else {
    console.log("last   music")
     dataId=1;
    let dt=dataId.toString();
    // console.log(typeof dt)
   this.setAttribute('data-id', dt);
   document.querySelector(".prew").setAttribute('data-id', dt);

   }

      
      });
     
  });
const music = [
    {singer:"Sezen Aksu",
    id:0,
    musicName:"Biliyorsun",
    imageSrc:"images/sezenaksu.jpg",
    musicSrc:"/musics/Sezen_Aksu_-_Biliyorsun_-_www.BiG.AZ.mp3"
}
    ,
    {singer:"Şövkət Ələkbərova",
    id:1,
    musicName:"Ağ çiçəyim",
    imageSrc:"images/m-2.jfif",
    musicSrc:"/musics/Sovket_Elekberova_-_Ag_ciceyim_-_www.BiG.AZ.mp3"
},
{singer:"Çağan Şengül",
id:2,
musicName:"Çok Yazık",
imageSrc:"images/caganSengul.jfif",
musicSrc:"/musics/Cagan-Sengul-Cok-Yazik-18.mp3"
},
{singer:"Melike Şahin",
id:3,
musicName:"Diva Yorgun",
imageSrc:"images/sahin.jfif",
musicSrc:"/musics/Melike-Sahin-Diva-Yorgun.mp3"
}
]


