// Импорт React и его хука useState
import React, { createContext, useState } from "react";

// Создание нового контекста React
const FitnessItems = createContext();

// Компонент FitnessContext, принимающий дочерние компоненты через props `children`
const FitnessContext = ({ children }) => {
  // Создание состояния для отслеживания выполненных упражнений
  const [completed, setCompleted] = useState([]);
  // Создание состояния для отслеживания общего количества тренировок
  const [workout, setWorkout] = useState(0);
  // Создание состояния для отслеживания количества сожжённых калорий
  const [calories, setCalories] = useState(0);
  // Создание состояния для отслеживания общего времени занятий в минутах
  const [minutes, setMinutes] = useState(0);

  // Провайдер контекста, предоставляющий значения состояния и функции их обновления
  // для дочерних компонентов
  return (
    <FitnessItems.Provider
      value={{
        completed,
        setCompleted,
        workout,
        setWorkout,
        calories,
        setCalories,
        minutes,
        setMinutes,
      }}
    >
      {children}
    </FitnessItems.Provider>
  );
};

// Экспорт FitnessContext и FitnessItems для использования в других частях приложения
export {FitnessContext, FitnessItems}
