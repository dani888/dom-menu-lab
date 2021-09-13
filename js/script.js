// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];
// Part 1:
// select and cache <main> into var
let mainEl = document.querySelector('main');
//style background color using 'var(--main-bg)';
mainEl.style.backgroundColor = 'var(--main-bg)';
// add h1
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

// object.classlist.add();
mainEl.classList.add('flex-ctr');

///////////////////////////////////////
// Part 2:
// get element by id 'top-menu'
let topMenuEl = document.querySelector('#top-menu');
// style the height 
topMenuEl.style.height = '100%';
//style background color using 'vvar(--top-menu-bg)';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// object.classlist.add();
topMenuEl.classList.add('flex-around');


////////////////////////////////////////
// Part 3:
// Iterate over the entire menuLinksarray and for each "link" object:

for (let i = 0; i < menuLinks.length; i++) {
    var aTag = document.createElement("a");
    topMenuEl.appendChild(aTag);
    aTag.innerHTML = menuLinks[i].text;
    aTag.href = menuLinks[i].href;
}
