
let pers = document.querySelectorAll('.pers');
let img = document.querySelectorAll('.img');

 let img1 = document.querySelector('.img1');
 let img2 = document.querySelector('.img2');
 let img3 = document.querySelector('.img3');
 let img4 = document.querySelector('.img4');



pers.forEach(element => {
    console.log(element);
    element.addEventListener('click', e =>{
        console.log(e.target.classList);
        changeJoueur(e);

    })
});

img.forEach(element => {
    
})
console.log(img);
//////// FONCTION

function changeJoueur (e){
    // console.log(e.target.classList);
    if (e.target.classList.value
        == " pers pers1") {
            console.log();
             console.log(img1.classList);
             document.querySelector('.active').classList.toggle("disble");
             document.querySelector('.active').classList.toggle("active");
              img1.classList.toggle("active")
              img1.classList.toggle("disble")
    }
    else if (e.target.classList.value
        == "pers pers2") {
         img2.classList.toggle("active")
         img1.classList.toggle("disble")
        let ddd = document.querySelector('.active');
        ddd.classList.toggle("active");
        ddd.classList.toggle("disble");
              img2.classList.toggle("active")
              img2.classList.toggle("disble")
      
        console.log(ddd.classList);
         console.log(img2.classList);
    }else if (e.target.classList.value
        == "pers pers3") {
            let ddd = document.querySelector('.active')
            ddd.classList.toggle("active");
            ddd.classList.toggle("disble");
                  img3.classList.toggle("active")
                    img3.classList.toggle("disble")
    }else{
        let ddd = document.querySelector('.active')
        ddd.classList.toggle("active");
        ddd.classList.toggle("disble");
             img4.classList.toggle("active")
             img4.classList.toggle("disble")
    }
}
    
