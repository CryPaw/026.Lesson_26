const c1 = document.getElementById('c1');
const d2 = document.getElementById('d2');
const b3 = document.getElementById('b3');

const scc1 = document.querySelector('.q1');
const sci1 = document.querySelector('.img1');

const scc2 = document.querySelector('.q2');
const sci2 = document.querySelector('.img2');

const scc3 = document.querySelector('.q3');
const sci3 = document.querySelector('.img3');


const scd1 = document.querySelector('.q1_1');
const scdi1 = document.querySelector('.img1_1');

const scd2 = document.querySelector('.q2_2');
const scdi2 = document.querySelector('.img2_2');

const scd3 = document.querySelector('.q3_3');
const scdi3 = document.querySelector('.img3_3');


const scb1 = document.querySelector('.q1_1_1');
const scbi1 = document.querySelector('.img1_1_1');

const scb2 = document.querySelector('.q2_2_2');
const scbi2 = document.querySelector('.img2_2_2');

const scb3 = document.querySelector('.q3_3_3');
const scbi3 = document.querySelector('.img3_3_3');


const pd = document.getElementById('pd');
const pl = document.getElementById('pl2');
const mybtn = document.querySelector('.mybtn');
const removescc = document.querySelectorAll('.selectedCategory_cats');
const title = document.createElement('div');
title.className = 'title_2';
title.id = 'tit_2';



document.getElementById("pm").addEventListener("click", function(event) {
  
    let targetElement = event.target;
  
    if (targetElement === c1) {
        // alert("Cat-category");
        pd.appendChild(title);
        pl.style.setProperty("display", "flex");
        scd1.style.setProperty("display", "none");
        scd2.style.setProperty("display", "none");
        scd3.style.setProperty("display", "none");
        scb1.style.setProperty("display", "none");
        scb2.style.setProperty("display", "none");
        scb3.style.setProperty("display", "none");
        scc1.style.setProperty("display", "block");
        scc2.style.setProperty("display", "block");
        scc3.style.setProperty("display", "block");
      } else if (targetElement === d2){
        pd.appendChild(title);
        pl.style.setProperty("display", "flex");
        scc1.style.setProperty("display", "none");
        scc2.style.setProperty("display", "none");
        scc3.style.setProperty("display", "none");
        scb1.style.setProperty("display", "none");
        scb2.style.setProperty("display", "none");
        scb3.style.setProperty("display", "none");
        scd1.style.setProperty("display", "block");
        scd2.style.setProperty("display", "block");
        scd3.style.setProperty("display", "block");
      } else if (targetElement === b3){
        pd.appendChild(title);
        pl.style.setProperty("display", "flex");
        scc1.style.setProperty("display", "none");
        scc2.style.setProperty("display", "none");
        scc3.style.setProperty("display", "none");
        scd1.style.setProperty("display", "none");
        scd2.style.setProperty("display", "none");
        scd3.style.setProperty("display", "none");
        scb1.style.setProperty("display", "block");
        scb2.style.setProperty("display", "block");
        scb3.style.setProperty("display", "block");
      }
  });


  document.getElementById("pl").addEventListener("click", function(event) {
  
    let targetElement = event.target;
  
    if (targetElement === scc1) {
        mybtn.style.setProperty("display", "inline-block");
        let clone = scc1.cloneNode(true);
        title.appendChild(clone);
        scc1.style.setProperty("display", "none");
    } 

    if (targetElement === sci1) {
        mybtn.style.setProperty("display", "inline-block");
        let clone = scc1.cloneNode(true);
        title.appendChild(clone);
        scc1.style.setProperty("display", "none");
    } 

    if (targetElement === scc2){
        mybtn.style.setProperty("display", "inline-block");
        let clone2 = scc2.cloneNode(true);
        title.appendChild(clone2);
        scc2.style.setProperty("display", "none");
    } 

    if (targetElement === sci2) {
        mybtn.style.setProperty("display", "inline-block");
        let clone2 = scc2.cloneNode(true);
        title.appendChild(clone2);
        scc2.style.setProperty("display", "none");
    } 

    if (targetElement === scc3){
        mybtn.style.setProperty("display", "inline-block");
        let clone3 = scc3.cloneNode(true);
        title.appendChild(clone3);
        scc3.style.setProperty("display", "none");
    }

    if (targetElement === sci3) {
        mybtn.style.setProperty("display", "inline-block");
        let clone3 = scc3.cloneNode(true);
        title.appendChild(clone3)
        scc3.style.setProperty("display", "none");
    }





    if (targetElement === scd1) {
        mybtn.style.setProperty("display", "inline-block");
        let clone = scd1.cloneNode(true);
        title.appendChild(clone);
        scd1.style.setProperty("display", "none");
    } 

    if (targetElement === scdi1) {
        mybtn.style.setProperty("display", "inline-block");
        let clone = scd1.cloneNode(true);
        title.appendChild(clone);
        scd1.style.setProperty("display", "none");
    } 

    if (targetElement === scd2){
        mybtn.style.setProperty("display", "inline-block");
        let clone2 = scd2.cloneNode(true);
        title.appendChild(clone2);
        scd2.style.setProperty("display", "none");
    } 

    if (targetElement === scdi2) {
        mybtn.style.setProperty("display", "inline-block");
        let clone2 = scd2.cloneNode(true);
        title.appendChild(clone2);
        scd2.style.setProperty("display", "none");
    } 

    if (targetElement === scd3){
        mybtn.style.setProperty("display", "inline-block");
        let clone3 = scd3.cloneNode(true);
        title.appendChild(clone3);
        scd3.style.setProperty("display", "none");
    }

    if (targetElement === scdi3) {
        mybtn.style.setProperty("display", "inline-block");
        let clone3 = scd3.cloneNode(true);
        title.appendChild(clone3)
        scd3.style.setProperty("display", "none");
    } 
    




    if (targetElement === scb1) {
        mybtn.style.setProperty("display", "inline-block");
        let clone = scb1.cloneNode(true);
        title.appendChild(clone);
        scb1.style.setProperty("display", "none");
    } 

    if (targetElement === scbi1) {
        mybtn.style.setProperty("display", "inline-block");
        let clone = scb1.cloneNode(true);
        title.appendChild(clone);
        scb1.style.setProperty("display", "none");
    } 

    if (targetElement === scb2){
        mybtn.style.setProperty("display", "inline-block");
        let clone2 = scb2.cloneNode(true);
        title.appendChild(clone2);
        scb2.style.setProperty("display", "none");
    } 

    if (targetElement === scbi2) {
        mybtn.style.setProperty("display", "inline-block");
        let clone2 = scb2.cloneNode(true);
        title.appendChild(clone2);
        scb2.style.setProperty("display", "none");
    } 

    if (targetElement === scb3){
        mybtn.style.setProperty("display", "inline-block");
        let clone3 = scb3.cloneNode(true);
        title.appendChild(clone3);
        scb3.style.setProperty("display", "none");
    }

    if (targetElement === scbi3) {
        mybtn.style.setProperty("display", "inline-block");
        let clone3 = scb3.cloneNode(true);
        title.appendChild(clone3)
        scb3.style.setProperty("display", "none");
    } 
    
  });

  document.getElementById("pd").addEventListener("click", function(event) {
  
    let targetElement = event.target;

    if (targetElement === mybtn) {
        pl.style.setProperty("display", "none")
        title.replaceChildren('')
        mybtn.style.setProperty("display", "none");
        alert('Дякую за покупку!')
        
        
    } 

  });