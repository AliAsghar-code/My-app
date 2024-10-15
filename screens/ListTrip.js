import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";


const ListTrip = () => {
    const navigation = useNavigation(); 
  return (
    <View style={{flex:1}}>
    <View >
    <View style={{justifyContent:"center",marginTop:"15%",marginLeft:"10%"}}>
        <Text style={{fontWeight:"bold",fontSize:25}}>List your Trip</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search destination"
          
        />
        <TouchableOpacity style={styles.searchIcon}>
          <AntDesign name="search1" size={22} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{borderWidth:1,width:"85%",height:"25%",borderRadius:22,marginTop:"5%",borderColor:"rgba(211, 211, 211, 0.4)",marginLeft:"8%"}}>
<Text style={{marginLeft:"9%",marginTop:"8%",fontWeight:"bold",fontSize:19}}>Kuta Beach</Text>
<Text style={{marginLeft:"9%",marginTop:"2%",fontWeight:"bold",color:"#ee6b6e",fontSize:16}}>$1.450,00</Text>
<View style={{flexDirection:"row",marginTop:"3%",marginLeft:"9%"}}>
<MaterialCommunityIcons name="calendar-month-outline" size={24} color="#d3d3d3" />
<Text style={{fontWeight:"bold",alignSelf:"center",color:"#d3d3d3"}}>13 june 2021 - 15 june 2021</Text>
</View>

      </View>
      <View style={{borderWidth:1,width:"85%",height:"25%",borderRadius:22,marginTop:"5%",borderColor:"rgba(211, 211, 211, 0.4)",marginLeft:"8%"}}>
<Text style={{marginLeft:"9%",marginTop:"8%",fontWeight:"bold",fontSize:19}}>Kuta Resort</Text>
<Text style={{marginLeft:"9%",marginTop:"2%",fontWeight:"bold",color:"#ee6b6e",fontSize:16}}>$1.450,00</Text>
<View style={{flexDirection:"row",marginTop:"3%",marginLeft:"9%"}}>
<MaterialCommunityIcons name="calendar-month-outline" size={24} color="#d3d3d3" />
<Text style={{fontWeight:"bold",alignSelf:"center",color:"#d3d3d3"}}>13 june 2021 - 15 june 2021</Text>
</View>

      </View>
    </View>
    <View style={styles.bottomNavigation}>
        <TouchableOpacity  onPress={()=>navigation.navigate("HomeScreen")}>
          <AntDesign name="home" style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity  onPress= {() =>navigation.navigate("WishList")}    style={{flexDirection:"row",borderWidth:1,borderRadius:117,padding:7,backgroundColor:"black"}} >
          <FontAwesome name="location-arrow" style={ {
    fontSize: 24,
    color: "white",
  }} />
          <Text style={{marginLeft:4,fontWeight:"bold",color:"white",marginTop:3}}>My Trip</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="hearto" style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="user" style={styles.navIcon} />
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default ListTrip

const styles = StyleSheet.create({
    searchContainer: {
    width: "85%",
    marginLeft: "5%",
    marginTop:"8%"
  },
  searchInput: {
    height: 45,
    borderColor: "gray",
    
    marginBottom: 16,
    paddingHorizontal: 15,
    borderRadius: 18,
    marginLeft: "5%",backgroundColor:"#d3d3d3"
  },
  searchIcon: {
    position: "absolute",
    right: 15,
    top: 14,
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50, // Set a height
    // or any color you prefer
    flexDirection: 'row',
    justifyContent: 'space-around', // Space out the buttons evenly
    alignItems: 'center', 
    margin:10,
  },
  
  navIcon: {
    fontSize: 24,
    color: "black",
    marginTop:"12%",
    marginLeft:"8%"
  },
})