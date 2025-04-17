// js/api.js

const API_BASE_URL = 'https://asep38.github.io/api-inggris-indonesia/data/vocab';

export async function getAnimalData() {
  try {
    const response = await fetch(`${API_BASE_URL}/animals.json`);

    if (!response.ok) {
      throw new Error(`Gagal fetch data: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data.map(item => ({
      icon: item.icon,
      word: item.word,
      translation: item.translation
    }));
  } catch (error) {
    console.error('Error mengambil data hewan:', error);
    return [];
  }
}
