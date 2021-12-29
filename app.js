let pers = document.querySelectorAll(".pers");
let images = document.querySelector(".images");
let menu = document.querySelector(".menu");

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let img4 = document.querySelector(".img4");

pers.forEach(element => {
    console.log(element);
    element.addEventListener('click', e =>{
         console.log(e.target.classList);
        personnage(e);

    });

});
// images.forEach(element => {
//     console.log(images);
// })
// 


function personnage (e){
    if(e.target.classList.value == "pers pers1"){
        images.style.backgroundColor="green";
         console.log("pers pers1");
           console.log(img1.classList);
           

            // img1.classList.toggle("active")
            // img2.classList.toggle("disble")
            // document.querySelector('.active').classList.toggle("disble");
            // document.querySelector('.active').classList.toggle("active");
            // img1.classList.toggle("active")
            // img2.classList.add("disble")
            img1.classList.add("active");
            img1.classList.remove("disble");
             img2.classList.add("disble");
             img3.classList.add("disble");
             img4.classList.add("disble");
            let audio = new Audio('Audio/jet4.mp3');
            audio.play();
            

    }
    else if (e.target.classList.value == "pers pers2") {

            // img2.classList.toggle("active")
            // img1.classList.toggle("disble")
            console.log(img2.classList);
            images.style.backgroundColor = "#fff";
            // document.querySelector('.active').classList.toggle("active");
            // document.querySelector('.active').classList.toggle("disble");
             img2.classList.add("active");
             img2.classList.remove("disble");
             img1.classList.add("disble");
             img3.classList.add("disble");
             img4.classList.add("disble");
      
            //  console.log(document.querySelector('.active').classList);
            //  console.log(img2.classList);
            let audio = new Audio('Audio/jet.mp3');
            audio.play();
            
    }  
    else if (e.target.classList.value == "pers pers3") {

        // img2.classList.toggle("active")
        // img1.classList.toggle("disble")
        // document.querySelector('.active').classList.toggle("active");
        // document.querySelector('.active').classList.toggle("disble");
        images.style.backgroundColor = "#000";
         img3.classList.add("active");
         img3.classList.remove("disble");
         img1.classList.add("disble");
         img2.classList.add("disble");
         img4.classList.add("disble");
        //  console.log(document.querySelector('.active').classList);
        //  console.log(img2.classList);
        let audio = new Audio('Audio/jet4.mp3');
        audio.play();
    }  
    else{

        // img2.classList.add("active")
        // img1.classList.toggle("disble")
        // document.querySelector('.active').classList.toggle("active");
        // document.querySelector('.active').classList.toggle("disble");
        images.style.backgroundColor = "#f0ff0f";
         img4.classList.add("active");
         img4.classList.remove("disble");
         img1.classList.add("disble");
         img3.classList.add("disble");
         img2.classList.add("disble");
  
        //  console.log(document.querySelector('.active').classList);
        //  console.log(img2.classList);
        let audio = new Audio('Audio/jet3.mp3');
        audio.play();
       
    }        
}