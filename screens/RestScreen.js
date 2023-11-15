// Импорт необходимых компонентов из 'react-native'
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
// Импорт React, хуков useState и useEffect
import React, { useState, useEffect } from "react";
// Импорт хука useNavigation из '@react-navigation/native'
import { useNavigation } from "@react-navigation/native";

// Определение компонента RestScreen
const RestScreen = () => {
  // Использование хука useNavigation для навигации
  const navigation = useNavigation();
  // Инициализация таймера
  let timer = 0;
  // Состояние для отслеживания оставшегося времени отдыха
  const [timeLeft, setTimeLeft] = useState(3);

  // Функция для запуска таймера
  const startTime = () => {
    timer = setTimeout(() => {
      // Уменьшение оставшегося времени каждую секунду
      if (timeLeft <= 0) {
        // Переход обратно в предыдущий экран, если время истекло
        navigation.goBack();
        clearTimeout(timer); // Очистка таймера
      }
      setTimeLeft(timeLeft - 1); // Обновление состояния времени
    }, 1000);
  };

  // Хук useEffect для инициализации таймера при монтировании компонента
  useEffect(() => {
    startTime();
    // Очистка таймера при размонтировании компонента
    return () => clearTimeout(timer);
  });

  // JSX для отображения интерфейса
  return (
    <SafeAreaView>
      // Отображение изображения
      <Image
        source={{
          uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_500:300,c_fit/dpr_2/image/carefit/bundle/CF01032_magazine_2.png",
        }}
        style={{ width: "90%", height: 420 }}
      />
      // Отображение текста "Отдохните!"
      <Text
        style={{
          fontSize: 30,
          fontWeight: "900",
          marginTop: 50,
          textAlign: "center",
        }}
      >
        Отдохните!
      </Text>
      // Отображение оставшегося времени отдыха
      <Text
        style={{
          fontSize: 40,
          fontWeight: "800",
          marginTop: 50,
          textAlign: "center",
        }}
      >
        {timeLeft}
      </Text>
    </SafeAreaView>
  );
};

// Экспорт компонента RestScreen
export default RestScreen;

// Создание пользовательского стиля (в данном случае пустой, но может быть расширен)
const styles = StyleSheet.create({});
