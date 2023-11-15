// Импорт необходимых компонентов из react-native и React
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
// Импорт данных о фитнесе
import fitness from "../data/fitness";
// Импорт иконок из @expo/vector-icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
// Импорт хука useNavigation из @react-navigation/native для навигации
import { useNavigation } from "@react-navigation/native";

// Определение компонента FitnessCards
const FitnessCards = () => {
  // Присвоение данных о фитнесе из импортированного модуля
  const FitnessData = fitness;
  // Использование хука навигации
  const navigation = useNavigation();

  // Отрисовка компонента
  return (
    // Контейнер View для отображения карточек
    <View>
      // Итерация по данным о фитнесе и создание карточек для каждого элемента
      {FitnessData.map((item, key) => (
        // Кнопка, которая при нажатии осуществляет навигацию
        <Pressable
          onPress={() => navigation.navigate("Workout",{
            image: item.image,
            excersises: item.excersises,
            id: item.id,
          })}
          style={{ alignItems: "center", justifyContent: "center", margin: 10 }}
          key={key}
        >
          // Отображение изображения карточки
          <Image
            style={{ width: "95%", height: 140, borderRadius: 7 }}
            source={{ uri: item.image }}
          />
          // Текстовая метка на карточке
          <Text
            style={{
              position: "absolute",
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              left: 20,
              top: 20,
            }}
          >
            {item.name}
          </Text>
          // Иконка молнии на карточке
          <MaterialCommunityIcons
            style={{ position: "absolute", color: "white", bottom: 15, left: 20 }}
            name="lightning-bolt"
            size={24}
            color="black"
          />
        </Pressable>
      ))}
    </View>
  );
};

// Экспорт компонента FitnessCards
export default FitnessCards;

// Создание пользовательского стиля (в данном случае пустой)
const styles = StyleSheet.create({});
