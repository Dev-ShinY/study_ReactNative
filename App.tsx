import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView, Alert } from "react-native";
const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  const [location, setLocation] = useState<string | null>();
  const [ok, setOk] = useState(true);
  const ask = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync({accuracy: 5});
      const location = await Location.reverseGeocodeAsync(
        {latitude, longitude},
        {useGoogleMaps: false}
      )      
      setLocation(location[0].city);
    } catch (error) {
      setOk(false)
      Alert.alert('놉.') 
    }
  };
  useEffect(() => {
    ask();
  });

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{location}</Text>
      </View>

      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
      >
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>

        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>

        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>

        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 58,
    fontWeight: "500",
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    marginTop: 50,
    fontWeight: "600",
    fontSize: 178,
  },
  description: {
    marginTop: -30,
    fontSize: 60,
  },
});
