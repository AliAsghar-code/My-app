import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Slider from "@react-native-community/slider";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const FilterScreen = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState(5500);
  const [selectedButton, setSelectedButton] = useState();
  const [selectedColor,setSelectedColor] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(null);
    const handlePress = (index) => {
      setSelectedIndex(index); // Update the selected index when a TouchableOpacity is pressed
    };
    const starRows = [5, 4, 3, 2, 1]; 
  return (
    <ScrollView nestedScrollEnabled={true}>
      <View
        style={{
          flexDirection: "row",
          marginTop: "20%",
          margin: "10%",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("CategoryScreen")}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              marginTop: 3,
              fontSize: 17,
              marginRight: "40%",
            }}
          >
            Filter
          </Text>
        </View>
      </View>
      <Text style={{ marginLeft: "9%", fontWeight: "bold", fontSize: 19 }}>
        Range Price
      </Text>
      <View style={{ marginLeft: 25, marginTop: 10 }}>
        <Slider
          style={{ width: 300, height: 40 }}
          minimumValue={5000}
          maximumValue={57000}
          step={100}
          value={value}
          onValueChange={(val) => setValue(val)}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          thumbTintColor="#ffffff"
        />
        <View style={styles.valuesContainer}>
          <Text style={styles.valueText}>$5500</Text>
          <Text style={styles.valueText}>${Math.round(value)}</Text>
          <Text style={styles.valueText}>$57000</Text>
        </View>
      </View>
      <Text
        style={{
          marginLeft: "8%",
          fontWeight: "bold",
          fontSize: 19,
          marginTop: "5%",
        }}
      >
        Start Review
      </Text>
      <View>
      {starRows.map((startCount, index) => (
        <TouchableOpacity key={index} onPress={() => handlePress(index)}>
          <View
            style={{
              flexDirection: "row",
              margin: "5%",
              borderWidth: 1,
              borderRadius: 12,
              padding: 10,
              borderColor: selectedIndex === index ? "green" : "#d3d3d3", // Change border color based on selected index
            }}
          >
           
           {[...Array(startCount)].map((_, starIndex) => (
              <View key={starIndex} style={{ marginRight: 5 }}>
                <AntDesign name="star" size={24} color="orange" />
              </View>
            ))}
            {/* Gray stars for the rest */}
            {[...Array(5 - startCount)].map((_, grayStarIndex) => (
              <View key={grayStarIndex} style={{ marginRight: 5 }}>
                <AntDesign name="star" size={24} color="#d3d3d3" />
              </View>
            ))}
          </View>
        </TouchableOpacity>
      ))}
    </View>
      
      <Text style={{ marginLeft: "9%", fontWeight: "bold", fontSize: 19 }}>
        Included
      </Text>
      <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled={true}
        contentContainerStyle={{ paddingEnd: 20, paddingBottom: 20 }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: "7%",
          }}
        >
          {/* Button 1 */}
          <TouchableOpacity
            onPress={() => setSelectedButton("all")}
          >
            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderRadius: 20,
                padding: 10,
                borderColor: selectedButton === "all" ? "green" : "#f5f5f5",
                backgroundColor: selectedButton === "all" ? "green" : "#f5f5f5",
                marginStart: 10,
              }}
            >
              <AntDesign name="wallet" size={24} color={selectedButton === "all" ? "white" : "orange"} />
              <Text style={{ fontWeight: "bold", marginLeft: 4, marginTop: 2, color: selectedButton === "all" ? "white" : "black" }}>
                ALL
              </Text>
            </View>
          </TouchableOpacity>

          {/* Button 2 */}
          <TouchableOpacity
            onPress={() => setSelectedButton("flight")}
          >
            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderRadius: 12,
                padding: 10,
                borderColor: selectedButton === "flight" ? "green" : "#f5f5f5",
                backgroundColor: selectedButton === "flight" ? "green" : "#f5f5f5",
                marginStart: 10,
              }}
            >
              <MaterialIcons name="flight" size={24} color={selectedButton === "flight" ? "white" : "orange"} />
              <Text style={{ fontWeight: "bold", marginLeft: 2, marginTop: 2, color: selectedButton === "flight" ? "white" : "black" }}>
                Flight
              </Text>
            </View>
          </TouchableOpacity>

          {/* Button 3 */}
          <TouchableOpacity
            onPress={() => setSelectedButton("hotel")}
          >
            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderRadius: 12,
                padding: 10,
                borderColor: selectedButton === "hotel" ? "green" : "#f5f5f5",
                backgroundColor: selectedButton === "hotel" ? "green" : "#f5f5f5",
                marginStart: 10,
              }}
            >
              <FontAwesome5 name="hotel" size={24} color={selectedButton === "hotel" ? "white" : "orange"} />
              <Text style={{ fontWeight: "bold", marginLeft: 4, marginTop: 2, color: selectedButton === "hotel" ? "white" : "black" }}>
                Hotel
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedButton("ticket")}
          >
            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderRadius: 12,
                padding: 10,
                borderColor: selectedButton === "ticket" ? "green" : "#f5f5f5",
                backgroundColor: selectedButton === "ticket" ? "green" : "#f5f5f5",
                marginStart: 10,
              }}
            >
              <Fontisto name="ticket" size={24} color={selectedButton === "ticket" ? "white" : "orange"} />
              <Text style={{ fontWeight: "bold", marginLeft: 4, marginTop: 2, color: selectedButton === "ticket" ? "white" : "black" }}>
                Ticket
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> setSelectedButton("passenger")}>
          <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderRadius: 12,
                padding: 10,
                borderColor: selectedButton === "passenger" ? "green" : "#f5f5f5",
                backgroundColor: selectedButton === "passenger" ? "green" : "#f5f5f5",
                marginStart: 10,
              }}
            >
              <MaterialCommunityIcons
              name="seat-passenger"
              size={24}
             color={selectedButton === "passenger" ? "white" : "orange"} />
              <Text style={{ fontWeight: "bold", marginLeft: 4, marginTop: 2, color: selectedButton === "passenger" ? "white" : "black" }}>
                Passenger
              </Text>
            </View>

          </TouchableOpacity>
          

        </View>
      </ScrollView>
    </View>
      
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "5%",
        }}
      >
        <TouchableOpacity
          // onPress={() => {
          //   setSelectedButton("booking");
          //   navigation.navigate("DateScreen");
          // }}
        >
          <View
            style={{
              borderRadius: 5,
              paddingVertical: 12,
              paddingHorizontal: 25,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                selectedButton === "clear" ? "orange" : "#d3d3d3",
            }}
          >
            <Text style={{ color: "black", fontSize: 17, fontWeight: "bold" }}>
              Clear All
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedButton("booking");
            navigation.navigate("DateScreen");
          }}
        >
          <View
            style={{
              borderRadius: 5,
              backgroundColor:
                selectedButton === "booking" ? "orange" : "#d3d3d3",
              paddingVertical: 12,
              paddingHorizontal: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "black", fontSize: 17, fontWeight: "bold" }}>
              Apply
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  valuesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
    marginTop: 10,
  },
  valueText: {
    fontSize: 13,
    color: "gray",
  },
});
