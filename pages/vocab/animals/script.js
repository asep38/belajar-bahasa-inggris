// pages/vocab/animals/script.js
import { getAnimalData } from '../../../../js/api.js';

const carouselWrapper = document.getElementById('carousel-wrapper');
let currentIndex = 0;
let carouselItems = [];

function showSlide(index) {
  carouselItems.forEach((item, i) => {
    item.classList.toggle('hidden', i !== index);
    item.classList.toggle('block', i === index);
  });
}

function createCarouselItem({ icon, word, translation }, index) {
  const div = document.createElement('div');
  div.className = `absolute inset-0 transition-opacity duration-700 ease-in-out ${index === 0 ? 'block' : 'hidden'}`;
  div.setAttribute('data-carousel-item', '');

  div.innerHTML = `
    <div class="flex flex-col items-center justify-center h-full bg-white rounded-lg shadow-md p-4 text-center">
      <div class="mb-2">
        <img src="${icon}" alt="${word}" class="w-20 object-contain" />
      </div>
      <div class="text-2xl font-bold text-blue-700 mb-2">${word}</div>
      <div class="text-lg text-gray-600">${translation}</div>
    </div>
  `;

  return div;
}

async function initCarousel() {
  const data = await getAnimalData();
  data.forEach((animal, index) => {
    const item = createCarouselItem(animal, index);
    carouselWrapper.appendChild(item);
    carouselItems.push(item);
  });

  // Tombol next & prev
  const nextBtn = document.querySelector('[data-carousel-next]');
  const prevBtn = document.querySelector('[data-carousel-prev]');

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentIndex);
  });
}

document.addEventListener('DOMContentLoaded', initCarousel);
