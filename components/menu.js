// js/components/menu.js

export function createMenu() {
    const menu = document.createElement('nav');
    menu.className = 'bg-gradient-to-r from-yellow-400 to-pink-400 p-6 rounded-xl shadow-md text-white flex flex-col items-center space-y-4';

    const logo = document.createElement('div');
    logo.className = 'text-3xl font-bold font-comic';
    logo.innerText = 'Fun English!';

    const menuList = document.createElement('ul');
    menuList.className = 'flex gap-6 flex-wrap justify-center';

    const items = [
        { name: '🐶 Animals', link: 'js/pages/animals.js' },
        { name: '🍎 Fruits', link: '#fruits' }
    ];

    items.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.link;
        a.textContent = item.name;
        a.className = 'bg-orange-400 hover:bg-orange-500 px-6 py-2 rounded-full shadow font-semibold transition-all';
        li.appendChild(a);
        menuList.appendChild(li);
    });

    menu.appendChild(logo);
    menu.appendChild(menuList);

    return menu;
}

export function renderMenu(targetId = 'menu-container') {
    const container = document.getElementById(targetId);
    if (container) {
        container.appendChild(createMenu());
    }
}
