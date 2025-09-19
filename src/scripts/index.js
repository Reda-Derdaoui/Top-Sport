
import { athletes } from "./athletes.js";
import { kids1, kids2 } from "./kids.js";
import { club } from "./clubDescriptions.js";

//athletes
let athleteElements = '';
athletes.forEach(athlete => {
    athleteElements += `
        <div class="athelet-container">
            <div class="${athlete.parent}">
               <div>
                <img class="reda-img" src="${athlete.image}" alt="reda">
               </div>
                <div class="${athlete.class}">
                    <h1 class="h1">${athlete.name}</h1>
                    <p class="p">${athlete.description}. <a class="links-visited"
                        href="${athlete.facebook}" target="_blank">Facebook</a>, 
                        <a class="links-visited" href="${athlete.instagram}" target="_blank">Instagram</a>
                     </p>
                </div>
            </div>
        </div>       
    `
});
document.querySelector('.athelet-container').innerHTML = athleteElements;

// kids anteractive 
let kidsHTML = '';
kids1.forEach(kid => {
    kidsHTML += `
         <div class="kids-img js-kids-image">
            <img class="${kid.class}" src="${kid.image}">
        </div>`
});
document.querySelector('.js-kids-image').innerHTML = kidsHTML;

let kidsHTML2 = '';
kids2.forEach(kid => {
    kidsHTML2 += `
         <div class="kids-img js-kids-image">
            <img class="${kid.class}" src="${kid.image}">
        </div>`
});
document.querySelector('.js-kids2-image').innerHTML = kidsHTML2;


// club descriptions
let clubHTML = '';
club.forEach(clubElements => {
    clubHTML += `
        <div class="parent-4 js-club-descriptions">
            <div class="club-img-1">
                <img class="club-img" src="${clubElements.image}" alt="club">
                <h2>${clubElements.title}</h2>
                <p class="p">${clubElements.description}</p>
            </div>
        </div>   `
});
document.querySelector('.js-club-descriptions').innerHTML = clubHTML;

