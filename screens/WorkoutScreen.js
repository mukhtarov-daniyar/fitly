// Импорт компонентов из библиотеки React Native
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
// Импорт React и useContext хука из React
import React, { useContext } from "react";
// Импорт хуков useNavigation и useRoute из "@react-navigation/native"
import { useNavigation, useRoute } from "@react-navigation/native";
// Импорт Ionicons из "@expo/vector-icons" для использования иконок
import { Ionicons } from "@expo/vector-icons";
// Импорт контекста FitnessItems
import { FitnessItems } from "../Context";
// Импорт AntDesign иконок
import { AntDesign } from '@expo/vector-icons';

// Определение компонента WorkOutScreen
const WorkOutScreen = () => {
  // Получение параметров маршрута и экземпляра навигации
  const route = useRoute();
  const navigation = useNavigation();
  // Использование контекста для получения данных о выполненных упражнениях
  const { completed, setCompleted } = useContext(FitnessItems);

  // JSX для отображения интерфейса
  return (
    <>
      // ScrollView для прокручиваемого контента
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "white", marginTop: 50 }}
      >
        // Отображение изображения, полученного из параметров маршрута
        <Image
          style={{ width: "100%", height: 170 }}
          source={{ uri: route.params.image }}
        />

        // Иконка назад с обработчиком нажатия для возвращения назад
        <Ionicons
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", top: 20, left: 20 }}
          name="arrow-back-outline"
          size={28}
          color="white"
        />

        // Перебор и отображение упражнений, полученных из параметров маршрута
        {route.params.excersises.map((item, index) => (
          <Pressable
            style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
            key={index}
          >
            // Отображение изображения упражнения
            <Image
              style={{ width: 90, height: 90 }}
              source={{ uri: item.image }}
            />

            // Отображение названия и количества подходов упражнения
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 17, fontWeight: "bold", width:170 }}>
                {item.name}
              </Text>
              <Text style={{ marginTop: 4, fontSize: 18, color: "gray" }}>
                x{item.sets}
              </Text>
            </View>

            // Отображение иконки завершения, если упражнение выполнено
            {completed.includes(item.name) ? (
              <AntDesign style={{marginLeft:40}} name="checkcircle" size={24} color="green" />
            ) : (
              null
            )}
          </Pressable>
        ))}
      </ScrollView>

      // Кнопка для начала тренировки с обработчиком нажатия
      <Pressable
        onPress={() =>  {
          navigation.navigate("Fit",{
            excersises:route.params.excersises,
          })
          setCompleted([]);
        }}
        style={{
          backgroundColor: "blue",
          padding: 10,
          marginLeft: "auto",
          marginRight: "auto",
          marginVertical: 20,
          width:120,
          borderRadius:6,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 15,
            fontWeight: "600",
          }}
        >
          CТАРТ
        </Text>
      </Pressable>
    </>
  );
};

// Экспорт компонента WorkOutScreen
export default WorkOutScreen;

// Создание пользовательского стиля (пустой в данном примере)
const styles = StyleSheet.create({});
