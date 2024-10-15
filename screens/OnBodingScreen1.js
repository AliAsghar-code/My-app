import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

const OnBodingScreen = () => {
  const navigation = useNavigation(); // Access navigation object

  const lines = [{ k: "bu" }, { k: "bu" }, { k: "bu" }];

  return (
    <View>
      <ImageBackground
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMlqrjTx4iQZRA_4MpQOH2TV4rJ6SdVXyhrw&s"
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
          <Text
            style={{
              marginTop: "8%",
              fontSize: 50,
              color: "white",
              fontWeight: "bold",
            }}
          >
            Lets explore
          </Text>
          <Text style={{ fontSize: 50, color: "white", fontWeight: "bold" }}>
            the world
          </Text>
        </View>
        <View style={{ alignSelf: "center", marginTop: "10%" }}>
          <Text style={{ color: "white", fontSize: 17 }}>
            let's explore the world with us with just a
          </Text>
          <Text style={{ color: "white", marginTop: 3 }}>few clicks</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: "10%", width: "100%" }}>
          {lines.map((line, index) => (
            <View
              key={index}
              style={{
                flex: 1,
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "50%",
                  height: 2,
                  backgroundColor: index === 0 ? "white" : "gray",
                }}
              />
            </View>
          ))}
        </View>
        <View
          style={{
            marginTop: "12%",
            margin: "10%",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <Button
            title="Next"
            color="orange"
            onPress={() => navigation.navigate("OnBoding2")} // Navigate to next screen
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default OnBodingScreen;

const styles = StyleSheet.create({});
