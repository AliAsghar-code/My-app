import { StyleSheet, Text, View,TouchableOpacity,TextInput,Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const WishList = () => {
    const navigation = useNavigation(); 
    const [searchQuery, setSearchQuery] = useState('');

    const cityData = [
    
        { 
          cityImg: {
            uri: "https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_640.jpg",
          },
          destinationName: "Kuta Beach",
          price: "745.00",
          rating: 5
        },
        {
          cityImg: {
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2XEApA8yIW-mXAd8-_6sixcShaVifEEw1bA&s",
          },
          destinationName: "Kuta Resort",
          price: "805.00",
          rating: 4
        },
        {
          cityImg: {
            uri: "https://media.istockphoto.com/id/1319453433/photo/modern-luxury-house-with-private-infinity-pool-in-dusk.jpg?s=2048x2048&w=is&k=20&c=NqVfhjJfyy6E9mTc9ytvFz-SQUClL-OuIUymRrpTWys=",
          },
          destinationName: "Hotel",
          price: "995.00",
          rating: 5
        },
        { 
          cityImg: {
            uri: "https://static.vecteezy.com/system/resources/thumbnails/012/168/187/small_2x/beautiful-sunset-on-the-beach-with-palm-tree-for-travel-and-vacation-free-photo.JPG",
          },
          destinationName: "Mandalika Beach",
          price: "745.00",
          rating: 4
        },
        {
          cityImg: {
            uri: "https://media.istockphoto.com/id/468861698/photo/life-in-rural-india.jpg?s=612x612&w=0&k=20&c=tL_-l5aiDO8Liwke7xoRP_tUGUaPlKtzajAJJi4Dxww=",
          },
          destinationName: "Jimbaran Resort",
          price: "805.00",
          rating: 3
        },
        {
          cityImg: {
            uri: "https://t4.ftcdn.net/jpg/03/71/14/65/360_F_371146519_OWEake9cQRtOlxmvfk7stLAFaDRUnB62.jpg",
          },
          destinationName: "Bali Beach",
          price: "995.00",
          rating: 5
        },
      ];
      const filteredCityData = cityData.filter(item =>
        item.destinationName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
      // Function to dynamically generate star ratings
      const renderRating = (rating) => {
        let stars = '';
        for (let i = 0; i < rating; i++) {
          stars += '★ ';
        }
        return stars.trim();
      };
  return (
    <View style={{flex:1}}>
      <View style={{justifyContent:"center",marginTop:"15%",marginLeft:"10%"}}>
        <Text style={{fontWeight:"bold",fontSize:25}}>Your Wishlist</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search destination"
          value={searchQuery}
          onChangeText={setSearchQuery}
          
        />
        <TouchableOpacity style={styles.searchIcon}>
          <AntDesign name="search1" size={22} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView  contentContainerStyle={{ flexGrow:1}} style={{  marginTop: "5%" }}>
        {filteredCityData.map((item, index) => (
          <TouchableOpacity 
            onPress={() => navigation.navigate("FilterScreen")} 
            key={index} 
            style={styles.packageContainer}
            activeOpacity={0.7}
          >
            <Image source={item.cityImg} style={styles.packageImage} />
            <View style={styles.packageDetails}>
              <Text style={styles.packageTitleText}>
                {item.destinationName}
              </Text>
              <Text style={styles.packagePrice}>
                ${item.price}
              </Text>
              <Text style={styles.packageRating}>
                {renderRating(item.rating)}
              </Text>
              <Text style={styles.packageDescription}>
                A resort is a place used for vacation relaxation or as a day trip destination.
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.bottomNavigation}>
        <TouchableOpacity  >
          <AntDesign name="home" style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>navigation.navigate("ListTrip")}>
          <FontAwesome name="location-arrow" style={styles.navIcon} />
          
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Profile")}  style={{flexDirection:"row",borderWidth:1,borderRadius:17,padding:7,backgroundColor:"black"}} >
          <AntDesign name="hearto"    style ={{
    fontSize: 24,
    color: "white",
  }}/>
          <Text style={{marginLeft:4,fontWeight:"bold",color:"white",marginTop:3}}> WishList</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="user" style={styles.navIcon} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default WishList

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
      packageContainer: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#f5f5f5",
        borderRadius: 12,
        marginHorizontal: "7%",
        marginVertical: "2%",
        overflow: "hidden",
        height: 150,
        paddingHorizontal: "5%",
      },
      packageImage: {
        height: "100%",
        width: "50%",
        borderRadius: 10,
      },
      packageDetails: {
        flex: 1,
        padding: "2%",
        justifyContent: "space-between",
      },
      packageTitleText: {
        fontWeight: "bold",
        fontSize: 17,
      },
      packagePrice: {
        color: "orange",
        fontWeight: "bold",
      },
      packageRating: {
        color: "orange",
        fontSize: 19,
        fontWeight: "bold",
      },
      packageDescription: {
        fontSize: 11,
        color: "gray",
      },
      bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-between",
   marginLeft:"10%",
   marginBottom:10,
   margin:10
  },
  navIcon: {
    fontSize: 24,
    color: "black",
    marginTop:7
  },
})