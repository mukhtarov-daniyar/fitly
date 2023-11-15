// Импорт необходимых компонентов из библиотеки React Native
import { StyleSheet, Text, View } from "react-native";
import React from "react"; // Импорт React для использования JSX

// Импорт компонентов для навигации
import { NavigationContainer } from "@react-navigation/native"; // Контейнер для навигации
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Функция для создания стекового навигатора

// Импорт экранов приложения
// import authScreen from "./screens/authScreen"; // Экран аутентификации (закомментирован)
import HomeScreen from "./screens/HomeScreen"; // Главный экран
import WorkoutScreen from "./screens/WorkoutScreen"; // Экран тренировок
import FitScreen from "./screens/FitScreen"; // Экран фитнеса
import RestScreen from "./screens/RestScreen"; // Экран отдыха

// Функция для создания стекового навигатора
const StackNavigator = () => {
  const Stack = createNativeStackNavigator(); // Создание экземпляра стекового навигатора

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Стек навигации с перечислением экранов */}
        {/* <Stack.Screen name="Auth" component={authScreen} options={{headerShown:false}}/> */}
        {/* Экран аутентификации, временно закомментирован */}
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        {/* Экран "Главная", заголовок скрыт */}
        <Stack.Screen name="Workout" component={WorkoutScreen} options={{headerShown:false}}/>
        {/* Экран "Тренировки", заголовок скрыт */}
        <Stack.Screen name="Fit" component={FitScreen} options={{headerShown:false}}/>
        {/* Экран "Фитнес", заголовок скрыт */}
        <Stack.Screen name="Rest" component={RestScreen} options={{headerShown:false}}/>
        {/* Экран "Отдых", заголовок скрыт */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator; // Экспорт компонента StackNavigator

const styles = StyleSheet.create({}); // Пустой объект стилей, если нужно добавить стили
