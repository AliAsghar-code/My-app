import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import React, { useState } from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import BookingScreen from "./BookingScreen";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation(); 

  const profileImg = {
    uri: "https://img.freepik.com/premium-photo/american-girl-portrait-happy-young-surprised-woman-usa-flag-background-funny-human-face-patriotism-concept-4th-july-happy-independence-day-memorial-day-labor-day_1070789-4931.jpg",
  };
  const beachImg = {
    uri: "https://images.unsplash.com/photo-1532517891316-72a08e5c03a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
  };
  const mountainImg = {
    uri: "https://media.istockphoto.com/id/1341288649/photo/75mpix-panorama-of-beautiful-mount-ama-dablam-in-himalayas-nepal.jpg?s=612x612&w=0&k=20&c=0xb_bb-NBIxjiJL_kqY-o3dCjv2PmKFZfRjHcVEijDc=",
  };
  const treeImg = {
    uri: "https://media.istockphoto.com/id/157316288/photo/mighty-oak-tree-on-clearing-in-deciduous-forest.jpg?s=612x612&w=0&k=20&c=VVP4X0zHPENFlW9OPBsJi06z7nq0QLEzNX4xqdSLLj0=",
  };
  const forestImg ={
    uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa_GLUaRtmYkMEzkKRp7iFz4Dfs3TfQ0fciw&s"
  };
  const oceanImg ={
uri :"https://images.unsplash.com/photo-1518837695005-2083093ee35b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2NlYW58ZW58MHx8MHx8fDA%3D"
  }
  const campingImg = {
    uri:"https://static.toiimg.com/photo/100182318.cms"
  }
  const cartData = [
    {
      bgImg: treeImg,
      destinationName: "kuta beach",
      locationName: "Bali Indonesia",
      rating: 5
    },
    {
      bgImg: beachImg,
      destinationName: "Bromo mountain",
      locationName: "Jawa Indonesia",
      rating: 5
    },
    {
      bgImg: treeImg,
      destinationName: "Trees House",
      locationName: "Muree",
      rating: 5
    },
    {
      bgImg: {
        uri: "https://images.unsplash.com/photo-1698143974025-7c29bdeffec0?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      destinationName: "Sea View",
      locationName: "Karachi",
      rating: 5
    },
  ];
  const cityData = [
    { 
      cityImg: {
        uri: "https://media.istockphoto.com/id/1059344876/photo/holidays-tourist-relaxing-in-luxury-beach-hotel-near-luxurious-swimming-pool.jpg?s=2048x2048&w=is&k=20&c=H5bOdFmhigLoSd6bOWCuENStpEQwFRqQX81F5ZGpFvA=",
      },
      destinationName: "Kuta beach",
      price: "745.00",
      rating: 5
    },
    {
      cityImg: {
        uri: "https://media.istockphoto.com/id/1594228594/photo/close-up-image-of-a-young-creative-artists-hands-smeared-with-watercolors-holding-a-spatula.webp?a=1&b=1&s=612x612&w=0&k=20&c=xa5TCz_W8_o8PWhseGHgk6pzQ8xpcCO1yuOXFDTBZU8=",
      },
      destinationName: "Painting",
      price: "805.00",
      rating: 5
    },
    {
      cityImg: {
        uri: "https://media.istockphoto.com/id/1319453433/photo/modern-luxury-house-with-private-infinity-pool-in-dusk.jpg?s=2048x2048&w=is&k=20&c=NqVfhjJfyy6E9mTc9ytvFz-SQUClL-OuIUymRrpTWys=",
      },
      destinationName: "Hotel",
      price: "995.00",
      rating: 5
    },
  ];
  const renderRating = (rating) => {
    let stars = '';
    for (let i = 0; i < rating; i++) {
      stars += '★ ';
    }
    return stars.trim();
  };

  return (
    <View style={{flex:1}}>
    <ScrollView nestedScrollEnabled={true} style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={profileImg} style={styles.profileImage} />
        <Text style={styles.helloText}>Hello, Pristia!</Text>
        <View>
        <Ionicons name="notifications-outline" size={24} color="black" />
        <TouchableOpacity style={    {
        position: 'absolute',
        top: "5%",
       left:"70%",
        height:8,
        width:8,
        backgroundColor: 'red',
        borderRadius: 5,
       
      }}></TouchableOpacity>
        </View>
        
      </View>
      <View style={styles.exploreTextContainer}>
        <Text style={styles.exploreTextBold}>Where do you</Text>
        <Text style={styles.exploreTextBold2}>want to explore today?</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="search destination"
          
        />
        <TouchableOpacity style={styles.searchIcon}>
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.categoryHeader}>
        <Text style={styles.categoryTitle}>Choose Category</Text>
        <Text style={{marginRight: "5%",
    textAlign: "center",
    marginTop: "2%",
    color: "gray",}}>Sell All</Text>
      </View>
      <ScrollView  nestedScrollEnabled={true}
       horizontal={true}
       showsHorizontalScrollIndicator={false}
      contentContainerStyle = {{paddingEnd:"55%"}}>
      <View style={{flexDirection: "row",
    marginTop: "6%",
    marginLeft: "4%",
    width:"95%"}}  >
      <View style={{flexDirection:"row",borderWidth:1,borderRadius:17,borderColor:"rgba(211, 211, 211, 0.8)",alignItems:"center"}}>
      <View style={{width:35,height:40,borderRadius:15,backgroundColor:"rgba(211, 211, 211, 0.4)"}}>
      <Image source={beachImg} style={styles.categoryImage} />
      </View>
      
      <Text style={styles.categoryText}>Beach</Text></View>
      
      
      <View style={{flexDirection:"row",borderWidth:1,borderRadius:17,borderColor:"rgba(211, 211, 211, 0.8)",alignItems:"center",marginLeft:"3%"}}>
      <View style={{width:35,height:40,borderRadius:15,backgroundColor:"rgba(211, 211, 211, 0.4)"}}>
      <Image source={mountainImg} style={styles.categoryImage} />
      </View>
      
      <Text style={styles.categoryText}>Mountain</Text></View>
      <View style={{flexDirection:"row",borderWidth:1,padding:1,borderRadius:17,borderColor:"rgba(211, 211, 211, 0.8)",alignItems:"center",marginLeft:"3%"}}>
      <View style={{width:35,height:40,borderRadius:15,backgroundColor:"rgba(211, 211, 211, 0.4)"}}>
      <Image source={forestImg} style={styles.categoryImage} />
      </View>
      
      <Text style={styles.categoryText}>Forest</Text></View>
      <View style={{flexDirection:"row",borderWidth:1,padding:1,borderRadius:17,borderColor:"rgba(211, 211, 211, 0.8)",alignItems:"center",marginLeft:"3%"}}>
      <View style={{width:35,height:40,borderRadius:15,backgroundColor:"rgba(211, 211, 211, 0.4)"}}>
      <Image source={oceanImg} style={styles.categoryImage} />
      </View>
      
      <Text style={styles.categoryText}>Ocean</Text></View>
      <View style={{flexDirection:"row",borderWidth:1,padding:1,borderRadius:17,borderColor:"rgba(211, 211, 211, 0.8)",alignItems:"center",marginLeft:"3%"}}>
      <View style={{width:35,height:40,borderRadius:15,backgroundColor:"rgba(211, 211, 211, 0.4)"}}>
      <Image source={campingImg} style={styles.categoryImage} />
      </View>
      
      <Text style={styles.categoryText}>Camping</Text></View>
      </View>
        
        
      </ScrollView>
      <View style={styles.favouriteHeader}>
        <Text style={styles.favouriteTitle}>Favourite Place</Text>
        <Text style={styles.exploreText}>Explore</Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled={true}
        contentContainerStyle={{ paddingEnd: 100 }}
      >
        <View style={styles.scrollContainer}>
          {cartData.map((item, index) => (
            <ImageBackground
              imageStyle={{ borderRadius: 20 }}
              key={index}
              source={item.bgImg}
              style={styles.imageBackground}
            >
            <View style={{borderColor:"#d3d3d3",width:30,height:30,borderWidth:1 ,borderRadius:15,backgroundColor:"white",marginTop:"10%",marginLeft:"80%"}}>
            
           <AntDesign name="heart" size={20} color="red" style={{borderColor:"gray",top:5,alignSelf:"center"}} />
           
            </View>
            
              <View style={styles.favouriteTextContainer}>
                <Text style={styles.favouriteText}>
                  {item.destinationName}
                </Text>
              </View>
              <View style={styles.locationContainer}>
                <Entypo name="location-pin" style={styles.locationIcon} />
                <Text style={styles.locationText}>
                  {item.locationName}
                </Text>
              </View>
              <Text style={{color: "orange",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft:"15%"      }}>
        {renderRating(item.rating)}
        </Text>
            </ImageBackground>
          ))}
        </View>
      </ScrollView>
      <View style={styles.packageHeader}>
        <Text style={styles.packageTitle}>Popular Package</Text>
        <Text style={styles.seeAllText}>Sell All</Text>
      </View>
      <View style={{ flex: 1,marginTop:"5%", }}>
  {cityData.map((item, index) => (
    <TouchableOpacity 
      key={index} 
      style={styles.packageContainer}
      onPress={() => navigation.navigate("BookingScreen")}
    >
      <Image source={item.cityImg} style={styles.packageImage} />
      <View style={styles.packageDetails}>
      <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
      <Text style={styles.packageTitleText}>
          {item.destinationName}
        </Text>
        <TouchableOpacity>
           <AntDesign name="heart" size={20} color="gray"  />
           </TouchableOpacity>
      </View>
        

        <Text style={styles.packagePrice}>
          ${item.price}
        </Text>
        <Text style={styles.packageRating}>
        {renderRating(item.rating)}
        </Text>
        <Text style={styles.packageDescription}>
          A resort is a place used for
        </Text>
        <Text style={styles.packageDescription}>
          vacation relaxation or as a day
        </Text>
      </View>
    </TouchableOpacity>
  ))}
</View>

      
    </ScrollView>
    <View style={styles.bottomNavigation}>
        <TouchableOpacity
          onPress={() => navigation.navigate("BookingScreen")}
          style={{flexDirection:"row",backgroundColor:"black",borderWidth:1,borderRadius:12,width:"30%",height:35}}
        >
          <AntDesign name="home" style={{color:"white",fontSize:24,top:5,marginLeft:5}} />
          <Text style={{top:9,marginLeft:5,color:'white',justifyContent:"center",fontWeight:"bold"}}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("ListTrip")}
          style={styles.navButton}
        >
          <FontAwesome name="location-arrow" style={styles.navIcon} />

        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate("WishList")}
          style={styles.navButton}
        >
          <AntDesign name="hearto" style={styles.navIcon} />
          
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          style={styles.navButton}
        >
          <AntDesign name="user" style={styles.navIcon} />
         
        </TouchableOpacity>
      </View>

    </View>
    
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {

  },
  profileContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "15%",
    margin: "10%",
    flex:1
  },
  profileImage: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },
  helloText: {
    fontWeight: "bold",
    marginRight: "50%",
    marginTop: "1%",
  },
  notificationIcon: {
    fontSize: 24,
    color: "black",
  },
  exploreTextContainer: {
    marginLeft: "9%",
    marginBottom: "8%",
    top:-5
  },
  exploreTextBold: {
    fontWeight: "bold",
    fontSize: 27,
  },
  exploreTextBold2: {
    fontWeight: "bold",
    fontSize: 28,
    marginTop: "0%",
  },
  searchContainer: {
    width: "85%",
    marginLeft: "5%",
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
    top: 10,
  },
  categoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop:"5%"
  },
  categoryTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: "9%",
  },
  seeAllText: {
    marginRight: "5%",
    textAlign: "center",
    marginTop: "7%",
    color: "gray",
  },
  categoryContainer: {
    flexDirection: "row",
    marginTop: "8%",
    marginLeft: "2%",
    width:"95%"
  },
  categoryImage: {
    height: 24,
    width: 17,
    borderRadius: 5,
    top:7,
    alignSelf:"center"
  },
  categoryText: {
    fontWeight: "bold",
    marginTop: "1%",
    marginLeft: "6%",
  },
  favouriteHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "7%",
  },
  favouriteTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: "9%",
  },
  exploreText: {
    marginRight: "5%",
    textAlign: "center",
    marginTop: "2%",
    color: "gray",
  },
  scrollContainer: {
    flexDirection: "row",
    
  },
  imageBackground: {
    height: 200,
    width: 170,
    marginLeft: "3%",
    marginTop: "3%",
    borderRadius: 20,
    overflow: "hidden",
  },
  favouriteTextContainer: {
    marginTop: "40%",
  },
  favouriteText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
    marginLeft: "10%",
  },
  locationContainer: {
    marginLeft: "10%",
    marginTop: "1%",
    flexDirection: "row",
  },
  locationIcon: {
    color: "white",
    fontSize: 24,
  },
  locationText: {
    color: "white",
    marginTop: "2%",
  },
  packageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop:"3%"
  },
  packageTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: "9%",
    marginTop: "5%",
  },
  packageContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "rgba(211, 211, 211, 0.3)",
    borderRadius: 12,
    marginHorizontal: "7%",
    marginVertical: "2%",
    overflow: "hidden",
    height: 150,
    paddingHorizontal: "5%",
  },
  packageImage: {
    height: "90%",
    width: "35%",
    borderRadius: 10,
    top:8
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
    marginRight:"10%",
    paddingHorizontal: "8%",
    paddingVertical: "3%",
    width:"95%",
    
    borderRadius: 12,
    
    marginBottom: 5,
    marginHorizontal: "5%",
  },
  navIcon: {
    fontSize: 24,
    color: "black",
    marginTop:7,
  
  },
});
