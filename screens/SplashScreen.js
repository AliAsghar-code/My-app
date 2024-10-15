import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Swiper from "react-native-swiper";
import OnBodingScreen1 from "./OnBodingScreen1"; // Correct import names
import OnBodingScreen2 from "./OnBodingScreen2";
import OnBodingScreen3 from "./OnBodingScreen3";
import { useState } from "react";

const SplashScreen = ({ navigation }) => {
  const [showSplash, setShowSplash] = useState(true); // State to control splash screen visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false); // Hide the splash screen after 4 seconds
    }, 4000);

    return () => clearTimeout(timer); // Cleanup timer when the component unmounts
  }, []);

  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        {/* <Image
          source={require('./path-to-your-logo.png')} // Add your splash screen logo here
          style={styles.splashLogo}
        /> */}
        <Text style={styles.splashText}>traver</Text>
        <Text style={{marginTop:"80%",color:"gray",alignItems:"center"}}>Version 1.1.0</Text>
      </View>
    );
  } 

  return (
    <Swiper
      style={styles.wrapper}
      loop={false} // No looping between screens
      showsButtons={false} // Disable navigation buttons
      dot={<View style={styles.dot} />} // Custom dot for swiper pagination
      activeDot={<View style={styles.activeDot} />} // Custom active dot
    >
      {/* Slide 1 */}
      <OnBodingScreen1 />
      {/* Slide 2 */}
      <OnBodingScreen2 />
      {/* Slide 3 */}
      <OnBodingScreen3 />
    </Swiper>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // Customize the background color
  },
  splashLogo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  splashText: {
    fontSize: 40,
    color: "black",
    fontWeight: "bold",
    marginTop:"99%"
  },
  wrapper: {}, // Empty style object for swiper
  dot: {
    backgroundColor: "rgba(255,255,255,.3)",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: "white",
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 3,
  },
});
