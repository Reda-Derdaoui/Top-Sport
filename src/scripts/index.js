
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

const clubHTML = () => {
    club.map(clubElement => {

        const div1 = document.createElement('div');
        div1.setAttribute('class', 'js-club-descriptions');

        const div2 = document.createElement('div');
        div2.setAttribute('class', 'club-img-1');

        div1.appendChild(div2);

        const img = document.createElement('img');
        img.className = 'club-img';
        img.src = `${clubElement.image}`;

        div2.appendChild(img);

        const h = document.createElement('h2');
        h.appendChild(document.createTextNode(`${clubElement.title}`));

        div2.appendChild(h);

        const p = document.createElement('p');
        p.setAttribute('class', 'p');

        p.appendChild(document.createTextNode(`${clubElement.description}`));

        div2.appendChild(p);

        document.querySelector('.js-club-descriptions').appendChild(div1);
    });
}
clubHTML();
