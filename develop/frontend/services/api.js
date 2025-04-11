import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api'; // Заміни на реальну URL-адресу бекенду

export const getJobs = async () => {
  try {
    const response = await axios.get(`${API_URL}/vacancies/`);
    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні вакансій:', error);
    return [];
  }
};