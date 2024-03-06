import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Network from "expo-network";
import { useEffect, useState } from "react";

export default function App() {
  const [ipAddress, setIpAddress] = useState(null);

  const getLocalIpAddress = async () => {
    try {
      const ipAddress = await Network.getIpAddressAsync();
      setIpAddress(ipAddress || 'N/A');
    } catch (error) {
      console.error('Error getting IP address:', error.message);
    }
  };

  useEffect(() => {
    getLocalIpAddress();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>IP Address: {ipAddress}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
