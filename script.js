const catCatalog = document.getElementById('c1');
const dogCatalog = document.getElementById('d2');
const birdCatalog = document.getElementById('b3');

const cats = document.querySelector(".cats")
const dogs = document.querySelector(".dogs")
const birds = document.querySelector(".birds")

const selectedCategoryCats1 = document.querySelector('.q1');
const selectedCategoryCats2 = document.querySelector('.q2');
const selectedCategoryCats3 = document.querySelector('.q3');

const selectedCategoryDogs1 = document.querySelector('.q1_1');
const selectedCategoryDogs2 = document.querySelector('.q2_2');
const selectedCategoryDogs3 = document.querySelector('.q3_3');

const selectedCategoryBirds1 = document.querySelector('.q1_1_1');
const selectedCategoryBirds2 = document.querySelector('.q2_2_2');
const selectedCategoryBirds3 = document.querySelector('.q3_3_3');

const productDescription = document.getElementById('pd');
const pl = document.getElementById('pl2');
const mybtn = document.querySelector('.mybtn');
const removescc = document.querySelectorAll('.selectedCategory_cats');
const title = document.createElement('div');
title.className = 'title_2';
title.id = 'tit_2';



function catFood() {
        productDescription.appendChild(title);
        pl.style.setProperty("display", "flex");

        dogs.style.setProperty("display", "none");
        birds.style.setProperty("display", "none");
        cats.style.setProperty("display", "flex");

        selectedCategoryCats1.style.setProperty("display", "block");
        selectedCategoryCats2.style.setProperty("display", "block");
        selectedCategoryCats3.style.setProperty("display", "block");
        
}

function dogFood() {
        productDescription.appendChild(title);
        pl.style.setProperty("display", "flex");
        
        cats.style.setProperty("display", "none");
        birds.style.setProperty("display", "none");
        dogs.style.setProperty("display", "flex");

        selectedCategoryDogs1.style.setProperty("display", "block");
        selectedCategoryDogs2.style.setProperty("display", "block");
        selectedCategoryDogs3.style.setProperty("display", "block");
        
}

function birdFood() {
        productDescription.appendChild(title);
        pl.style.setProperty("display", "flex");

        cats.style.setProperty("display", "none");
        dogs.style.setProperty("display", "none");
        birds.style.setProperty("display", "flex");

        selectedCategoryBirds1.style.setProperty("display", "block");
        selectedCategoryBirds2.style.setProperty("display", "block");
        selectedCategoryBirds3.style.setProperty("display", "block");
}

document.getElementById("pm").addEventListener("click", function(event) {
  
    let targetElement = event.target;
  
    if (targetElement === catCatalog) {
        catFood();
      } else if (targetElement === dogCatalog){
        dogFood();
      } else if (targetElement === birdCatalog){
        birdFood();
      }
  });

  function addClone(targetElement) {
    mybtn.style.setProperty("display", "inline-block");
    let clone = targetElement.cloneNode(true);
    title.appendChild(clone);
    targetElement.style.setProperty("display", "none");
  }

  document.getElementById("pl").addEventListener("click", function(event) {
  
    let targetElement = event.target;

    switch (targetElement) {
            case selectedCategoryCats1:
            addClone(targetElement);
            break;

            case selectedCategoryCats2:
            addClone(targetElement);
            break;

            case selectedCategoryCats3:
            addClone(targetElement);
            break;

            case selectedCategoryDogs1:
            addClone(targetElement);
            break;

            case selectedCategoryDogs2:
            addClone(targetElement);
            break;

            case selectedCategoryDogs3:
            addClone(targetElement);
            break;

            case selectedCategoryBirds1:
            addClone(targetElement);
            break;

            case selectedCategoryBirds2:
            addClone(targetElement);
            break;

            case selectedCategoryBirds3:
            addClone(targetElement);
            break;
    };

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
