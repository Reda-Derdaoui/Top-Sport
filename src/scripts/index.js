
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


const kidItems = () => {
    kids1.map(kid => {
        const div = document.createElement('div');
        div.className = 'js-kids-image';

        const img1 = document.createElement('img');
        img1.className = `${kid.class}`;
        img1.src = `${kid.image}`;

        div.appendChild(img1);

        document.querySelector('.js-kids-image').appendChild(div);

        console.log(div);
    });

    kids2.map(kid => {
        const div = document.createElement('div');
        div.className = 'js-kids-image';

        const img1 = document.createElement('img');
        img1.className = `${kid.class}`;
        img1.src = `${kid.image}`;

        div.appendChild(img1);

        document.querySelector('.js-kids2-image').appendChild(div);

        console.log(div);
    });
}
kidItems();


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

