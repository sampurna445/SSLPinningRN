import {View, Text, SafeAreaView, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import {fetch} from 'react-native-ssl-pinning';

export default function App() {
  const secureFetchData = async () => {
    console.log('fetch data clicked');
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1',
        {
          method: 'GET',
          sslPinning: {
            certs: ['mycert'],
          },
        },
      );

      if (response.status === 200) {
        const data = await response.json();
        console.log('Data:', data);
      } else {
        console.log('Request failed with status:', response.status);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <SafeAreaView>
      <Text>Testing SSL Pinning App</Text>
      <Button title="Fetch Secure Data" onPress={secureFetchData} />
    </SafeAreaView>
  );
}
