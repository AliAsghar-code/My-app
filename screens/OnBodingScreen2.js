import { Button, ImageBackground, StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
const OnBodingScreen = () => {
    const navigation = useNavigation(); 

  const lines = [{k:'bu'},{k:'bu'},{k:'bu'}];

  // Function to change line colors
  const toggleColor = (index) => {
    setLineColors((prevColors) => {
      const newColors = ['gray', 'gray', 'gray']; // Set all lines to gray
      newColors[index] = 'white'; // Set the clicked line to white
      return newColors;
    });
  };

  return (
    <View>
      <ImageBackground
        source={{
          uri: "https://c0.wallpaperflare.com/preview/207/782/540/human-person-outdoors-nature.jpg",
        }}
        style={{ height: "100%", width: "100%" }}
      >
        <View
          style={{
            justifyContent: "flex-start",
            marginTop: "85%",
            paddingLeft: 40,
          }}
        >
          <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
            traver
          </Text>
        </View>
        <View style={{ alignSelf: "center" }}>
          <Text style={{ marginTop: "8%", fontSize: 50, color: "white", fontWeight: "bold" }}>Visit tourist</Text>
          <Text style={{ fontSize: 50, color: "white", fontWeight: "bold" }}>attractions</Text>
        </View>
        <View style={{ alignSelf: "center", marginTop: "10%" }}>
          <Text style={{ color: "white", fontSize: 17 }}>Find thousands of tourist destinations </Text>
          <Text style={{ color: "white", marginTop: 3,fontSize: 17  }}>ready for you to visit</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: "10%",width:'100%' }}>
          {lines.map((color, index) => (
            
              <View 
              key={index}
              style={{ flex:1,justifyContent:'space-around',alignItems:'center'}}>
                <View
                  style={{
                    width: '50%',
                    height:2,
                    backgroundColor:index!=2?'white':'gray'
                  }}
                />
              </View>
 
          ))}
        </View>
        <View style={{ marginTop: '12%', margin: '10%', borderRadius: 10, overflow: 'hidden' }}>
          <Button title="Next" color="orange"onPress={()=>navigation.navigate("OnBoding3")}  />
        </View>
      </ImageBackground>
    </View>
  );
};

export default OnBodingScreen;

const styles = StyleSheet.create({});
