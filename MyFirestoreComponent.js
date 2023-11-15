import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { getDataFromFirestore } from './firestoreService';

const MyFirestoreComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Замените 'your_collection_name' на имя вашей коллекции в Firestore
    getDataFromFirestore('your_collection_name').then(fetchedData => {
      setData(fetchedData);
    });
  }, []);

  // Здесь вы можете отрисовать данные, например, в виде списка
  return (
    <View>
      {data.map(item => (
        <Text key={item.id}>{JSON.stringify(item)}</Text>
      ))}
    </View>
  );
};

export default MyFirestoreComponent;
