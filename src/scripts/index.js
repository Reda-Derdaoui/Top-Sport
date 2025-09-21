
import { athletes } from "./athletes.js";
import { kids1, kids2 } from "./kids.js";
import { club } from "./clubDescriptions.js";


const athleteElements = athletes.map(athlete => {
    return `
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
document.querySelector('.athelet-container').innerHTML = athleteElements.join('');


const kidsHTML = kids1.map(kid => {
    return `
        <div class="kids-img js-kids-image">
            <img class="${kid.class}" src="${kid.image}">
        </div>
    `
});
document.querySelector('.js-kids-image').innerHTML = kidsHTML.join('');


const kidsHTML2 = kids2.map(kid => {
    return `
        <div class="kids-img js-kids-image">
            <img class="${kid.class}" src="${kid.image}">
        </div>
    `
});
document.querySelector('.js-kids2-image').innerHTML = kidsHTML2.join('');


const clubHTML = club.map(clubElements => {
    return `
        <div class="parent-4 js-club-descriptions">
            <div class="club-img-1">
                <img class="club-img" src="${clubElements.image}" alt="club">
                <h2>${clubElements.title}</h2>
                <p class="p">${clubElements.description}</p>
            </div>
        </div>   `
});
document.querySelector('.js-club-descriptions').innerHTML = clubHTML.join('');

