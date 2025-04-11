// components/Vacancies.tsx
"use client";
import React from "react";

const Vacancies = ({ jobs, companies, categories }: { jobs: any[], companies: any, categories: any }) => {
  return (
    <div className="bg-gradient-to-b from-teal-400 to-gray-200 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-semibold text-white text-center mb-8">Список вакансій</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <div
              key={job.vacancy_id}
              className="bg-white rounded-lg shadow-lg p-6 space-y-4"
            >
              <h2 className="text-2xl font-bold text-teal-600">{job.name}</h2>
              <p className="text-gray-700">
                <strong>Компанія:</strong> {companies[job.company]  || "Невідома компанія"}
              </p>
              <p className="text-gray-700">
                <strong>Категорія:</strong> {categories[job.category] || "Невідома категорія"}
              </p>
              <p className="text-gray-700">
                <strong>Опис:</strong> {job.description}
              </p>
              <p className="text-gray-700">
                <strong>Вимоги:</strong> {job.requirements}
              </p>
              <p className="text-gray-700">
                <strong>Зарплата:</strong> {job.salary} грн
              </p>
              <p className="text-gray-700">
                <strong>Тип роботи:</strong> {job.job_type}
              </p>
              <p className="text-gray-700">
                <strong>Адреса:</strong> {job.address}
              </p>
              <p className="text-gray-700">
                <strong>Дата створення:</strong> {new Date(job.created_at).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vacancies;