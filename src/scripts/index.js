
import { athletes } from "./athletes.js";
import { kids1, kids2 } from "./kids.js";
import { club } from "./clubDescriptions.js";

const goTobutom = document.getElementById('aboutUs');
const goTotop = document.getElementById('onTop');
const Top = document.getElementById('topHome');
const top = document.getElementById('Top');
const buttom = document.getElementById('botum');

goTobutom.addEventListener('click', () => buttomScroll());
goTobutom.style.cursor = 'pointer';

goTotop.addEventListener('click', () => topScroll());
goTotop.style.cursor = 'pointer';

Top.addEventListener('click', () => topScroll());
Top.style.color = '#0b78d0';
Top.style.cursor = 'pointer';

function topScroll() {
    top.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
}

function buttomScroll() {
    buttom.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
}

const Title = () => {
    const div = creatDiv('Title');

    const h1 = document.createElement('h1');
    h1.setAttribute('class', 'title-marg');
    h1.appendChild(document.createTextNode('Marrakech Karate Club'));
    h1.style.color = '#101113';
    h1.style.marginBottom = '30px';


    div.appendChild(h1);

    // const h2 = document.createElement('h2');
    // h2.className = 'better';
    // h2.style.textAlign = 'center';
    // h2.style.color = '#101113';
    // h2.style.marginBottom = '100px';
    // h2.appendChild(document.createTextNode('A better place for learning a better karate skills'));

    // div.appendChild(h2);

    document.querySelector('.parent-2').appendChild(div);
}
Title();

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
        const div = creatDiv('js-kids-image');
        const image = creatImage(`${kid.class}`, `${kid.image}`);
        div.appendChild(image);
        document.querySelector('.js-kids-image').appendChild(div);
    });

    kids2.map(kid => {
        const div = creatDiv('js-kids-image');
        const image = creatImage(`${kid.class}`, `${kid.image}`);
        div.appendChild(image);

        document.querySelector('.js-kids2-image').appendChild(div);
    });
}
kidItems();

const clubHTML = () => {
    club.map(clubElement => {
        const div = creatDiv('js-club-descriptions');

        const div2 = creatDiv('club-img-1');

        div.appendChild(div2);

        const image = creatImage('club-img', `${clubElement.image}`)

        div2.appendChild(image);

        const h = document.createElement('h2');
        h.appendChild(document.createTextNode(`${clubElement.title}`));

        div2.appendChild(h);

        const p = document.createElement('p');
        p.setAttribute('class', 'p');
        p.appendChild(document.createTextNode(`${clubElement.description}`));

        div2.appendChild(p);

        document.querySelector('.js-club-descriptions').appendChild(div);
    });
}
clubHTML();

function creatImage(classes, src) {
    const img1 = document.createElement('img');
    img1.className = classes;
    img1.src = src;
    return img1;
}

function creatDiv(classes) {
    const div = document.createElement('div');
    div.className = classes;
    return div;
}