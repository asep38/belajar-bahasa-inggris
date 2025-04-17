// js/app.js

// pages import
import { renderAnimalsPage } from './pages/animals.js';
import { renderFruitsPage } from './pages/fruits.js'

// components import
import { renderMenu } from './components/menu.js';

// ====================================================

function handleRoute() {
    const hash = window.location.hash;

    switch (hash) {
        case '#animals':
            renderAnimalsPage();
            break;
        case '#fruits':
            renderFruitsPage();
            break;
        default:
            renderHomePage();
            break;
    }
}


document.addEventListener('DOMContentLoaded', () => {
  renderMenu();

  window.addEventListener('hashchange', handleRoute);
  handleRoute();
});

function renderHomePage() {
    const content = document.getElementById('page-content');
    content.innerHTML = `
      <div class="text-center mt-10">
        <h1 class="text-3xl font-bold text-blue-600 mb-4">Welcome to Fun English!</h1>
        <p class="text-lg text-gray-700">Choose a topic to start learning 🧠</p>
      </div>
    `;
  }
  