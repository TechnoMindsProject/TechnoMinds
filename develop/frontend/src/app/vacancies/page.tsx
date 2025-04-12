// vacancies/page.tsx
"use client";
import React, { useEffect, useState } from "react";
import { getJobs } from "../../../services/api";  // Імпортуємо getJobs з services/api
import Vacancies from "@/components/Vacancies";  // Імпортуємо компонент Vacancies
import axios from "axios";

export default function Page() {
  const [jobs, setJobs] = useState<any[]>([]); // Використовуємо useState для вакансій
  const [companies, setCompanies] = useState<any>({});
  const [categories, setCategories] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const data = await getJobs();  // Отримуємо вакансії
      setJobs(data);  // Оновлюємо стейт вакансій
      setLoading(false);  // Завершуємо завантаження
      fetchCompaniesAndCategories(data);  // Оновлюємо компанії та категорії
    };

    fetchJobs();  // Викликаємо функцію при першому рендерингу
  }, []); // Порожній масив залежностей означає, що це спрацює лише при першому рендері

  // Функція для отримання компаній та категорій
  const fetchCompaniesAndCategories = (jobs: any[]) => {
    const companyIds = [...new Set(jobs.map((job: any) => job.company))];
    const categoryIds = [...new Set(jobs.map((job: any) => job.category))];

    // Отримуємо компанії
    axios
      .get(`http://127.0.0.1:8000/api/companies/`, {
        params: { ids: companyIds.join(",") },
      })
      .then((response) => {
        const companiesData = response.data.reduce((acc: any, company: any) => {
          acc[company.id] = company.name;
          return acc;
        }, {});
        setCompanies(companiesData);
      });

    // Отримуємо категорії
    axios
      .get(`http://127.0.0.1:8000/api/categories/`, {
        params: { ids: categoryIds.join(",") },
      })
      .then((response) => {
        const categoriesData = response.data.reduce((acc: any, category: any) => {
          acc[category.id] = category.name;
          return acc;
        }, {});
        setCategories(categoriesData);
      });
  };

  if (loading) {
    return <p>Loading vacancies...</p>;  // Показуємо текст завантаження
  }

  return (
    <div>
      <Vacancies jobs={jobs} companies={companies} categories={categories} />  {/* Переходимо до компоненту вакансій */}
    </div>
  );
}
