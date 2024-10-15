import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
const DetailBookingScreen  = () => {
    const navigation = useNavigation(); 
    const [person,setPerson]=useState("");
    const [contact , setContact]=useState("03186788061");
    const [member ,setMember]=useState("2");
    const [id, setId]=useState("22222222");
    const [numberID,setNumberId]=useState("0000000");
      const handleBooking =()=>{
        if(person && contact && member  && id && numberID){
             navigation.navigate("PaymentScreen");
        } else{
            alert("please enter your data");
        }
      };
      return(
    <View>
      <View style={{flexDirection:"row",marginTop:"15%",justifyContent:"space-between",margin:"10%"}}>
      <TouchableOpacity onPress={()=>navigation.navigate("DateScreen")}><AntDesign name="arrowleft" size={24} color="black" /></TouchableOpacity>
      <Text style={{fontWeight:"bold",marginRight:"30%",alignSelf:"center"}}>Detail Booking</Text>
      </View>
      <View style={{ marginTop: "3%", width: "85%",marginLeft:"10%" }}>
        <TextInput
          style={styles.input}
          placeholder="Person Responsible"
          value={person}
          onChangeText={setPerson}
        />
      </View>
      <View style={{ marginTop: "7%", width: "85%",marginLeft:"10%" }}>
        <TextInput
          style={styles.input}
          placeholder="Contact info"
          value={contact}
          onChangeText={setContact}
        />
      </View>
      <View style={{ marginTop: "7%", width: "85%",marginLeft:"10%" }}>
        <TextInput
          style={styles.input}
          placeholder="Member"
          value={member}
          onChangeText={setMember}
        />
      </View>
      <View style={{ marginTop: "7%", width: "85%",marginLeft:"10%" }}>
        <TextInput
          style={styles.input}
          placeholder="Type ID"
          value={id}
          onChangeText={setId}
        />
      </View>
      <View style={{ marginTop: "7%", width: "85%",marginLeft:"10%" }}>
        <TextInput
          style={styles.input}
          placeholder="Number ID"
          value={numberID}
          onChangeText={setNumberId}
        />
      </View>
      <View style={{margin:"8%",flexDirection:"row",justifyContent:"center",alignSelf:"center",marginTop:"30%"}}>
            <Text style={{fontWeight:"bold",color:"gray",fontSize:15,marginTop:"6%",marginLeft:"20%"}}>Total</Text>
            <Text style={{fontWeight:"bold",color:"orange",fontSize:19,marginTop:"5%"}}> $1490.00</Text>
            <TouchableOpacity onPress={handleBooking} >
            <View style={{marginLeft:"15%",borderRadius:10,backgroundColor:"orange", paddingVertical: 12, paddingHorizontal: 25,  alignItems: 'center',  justifyContent: 'center',width:"80%"}}>
                <Text style={{color:"black",fontSize: 17, fontWeight:"bold"}}>Payment Method</Text>
            </View>
            </TouchableOpacity>
           
        </View>
    </View>
  );
}

export default DetailBookingScreen 

const styles = StyleSheet.create({
    input: {
    height: 45,
    borderColor: "#d3d3d3",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 15,
    borderRadius: 13,
   
  },
})