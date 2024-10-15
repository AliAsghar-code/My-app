import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Calendar } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";
import DetailBookingScreen from "./DetailBookingScreen ";

const DateScreen = () => {
    const [year ,setYear] = useState(2024);
    
    const [markedDates, setMarkedDates] = useState(null);
    
      const onDayPress = (day) => {
        const newMarkedDates = {
          [day.dateString]: {
            selected: true,
            selectedColor: 'orange',
          },
        };
        setMarkedDates(newMarkedDates);
      };
      const [selectedButton,setSelectedButton]=useState()
      const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20%",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>
          Choosing Booking Date
        </Text>
      </View>
       <View style={{marginTop:"15%"}}>
      <Calendar
        markedDates={markedDates}
        onDayPress={onDayPress}
        theme={{
          
          arrowColor: 'black',
          selectedDayBackgroundColor: 'orange',
          selectedDayTextColor: '#ffffff',
        }}
        // hides the extra days of the month
        markingType={'none'}
      />
    </View>
    <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "5%",
          marginTop:"30%"
        }}
      >
        <TouchableOpacity  onPress={() => {
            setSelectedButton("clear");
            navigation.navigate("FilterScreen");
          }}
         
        >
          <View
            style={{
              borderRadius: 5,
              paddingVertical: 12,
              paddingHorizontal: 25,
              alignItems: "center",
              justifyContent: "center",
              
              backgroundColor:
                selectedButton === "back" ? "orange" : "#d3d3d3",
            }}
          >
            <Text style={{ color: "black", fontSize: 17, fontWeight: "bold" }}>
              Back
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
            setSelectedButton("confirm");
            navigation.navigate(DetailBookingScreen)
        }}
    
        >
          <View
            style={{
              borderRadius: 5,
              backgroundColor:
                selectedButton === "confirm" ? "orange" : "#d3d3d3",
              paddingVertical: 12,
              paddingHorizontal: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "black", fontSize: 17, fontWeight: "bold" }}>
              Confirm
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DateScreen;

const styles = StyleSheet.create({});
