import { StyleSheet, Text, View,TouchableOpacity,TextInput,ScrollView,ImageBackground } from 'react-native'
import { useState } from 'react';
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";

const SearchScreen = () => {
  const [lastSearches, setLastSearches] = useState(["Kuta Beach","Trees House","Bromo Mountain"]);

const removeSearch = (search) => {
  setLastSearches(lastSearches.filter(item => item !== search));
};
    const navigation = useNavigation(); 
    const profileImg = {
        uri: "https://media.istockphoto.com/id/468861698/photo/life-in-rural-india.jpg?s=612x612&w=0&k=20&c=tL_-l5aiDO8Liwke7xoRP_tUGUaPlKtzajAJJi4Dxww=",
      };
      const beachImg = {
        uri: "https://plus.unsplash.com/premium_photo-1681223399348-406a58033eee?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      };
      const mountainImg = {
        uri: "https://media.istockphoto.com/id/1341288649/photo/75mpix-panorama-of-beautiful-mount-ama-dablam-in-himalayas-nepal.jpg?s=612x612&w=0&k=20&c=0xb_bb-NBIxjiJL_kqY-o3dCjv2PmKFZfRjHcVEijDc=",
      };
      const treeImg = {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUImHCTRxHl5dJ4IUd9KPw3XmJHka-Ia3iQw&s",
      };
      const cartData = [
        {
          bgImg: profileImg,
          destinationName: "kuta beach",
          locationName: "Bali Indonesia",
        },
        {
          bgImg: beachImg,
          destinationName: "Bromo mountain",
          locationName: "Jawa Indonesia",
        },
        {
          bgImg: treeImg,
          destinationName: "Trees House",
          locationName: "Muree",
        },
        {
          bgImg: {
            uri: "https://images.unsplash.com/photo-1698143974025-7c29bdeffec0?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          destinationName: "Sea View",
          locationName: "Karachi",
        },
        
      ];
  return (
    <View>
<View
          style={{
            flexDirection: "row",
            marginTop: "20%",
            margin: "10%",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={()=>navigation.navigate('KutaBeachScreen')}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ fontWeight: "bold",marginRight:"40%",marginTop:3,fontSize:17 }}>Search</Text>
        </View>
        <View style={{ 
    width: "85%",
    marginLeft: "5%",
  }}>
        <TextInput
          style={{
    height: 45,
    borderColor: "gray",
    marginBottom: 16,
    paddingHorizontal: 15,
    borderRadius: 18,
    marginLeft: "5%",
    backgroundColor:"#d3d3d3"
  }}
          placeholder="Search destination"
        />
        <TouchableOpacity style={{
    position: "absolute",
    right: 15,
    top: 10,
  }}>
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={{marginTop:"5%",marginLeft:"10%",fontWeight:"bold",fontSize:19}}>
        Last Search
      </Text>
      
      {lastSearches.map((search, index) => (
  <View key={index} style={{ marginTop: "5%", margin: "6%", flexDirection: "row", justifyContent: "space-between",marginLeft:"10%" }}>
    <FontAwesome6 name="clock" size={20} color="gray" />
    <Text style={{ marginRight: "45%", fontWeight: "bold",fontSize:15}}>{search}</Text>
    <TouchableOpacity onPress={() => removeSearch(search)}>
      <Entypo name="cross" size={24} color="black" />
    </TouchableOpacity>
  </View>))}
      <View style={styles.favouriteHeader}>
        <Text style={styles.favouriteTitle}>Favourite Place</Text>
        <Text style={styles.exploreText}>Explore</Text>
      </View>
      <ScrollView style={{marginLeft:16}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled={true}
        contentContainerStyle={{ paddingEnd: 100 }}
      >
        <View style={styles.scrollContainer}>
          {cartData.map((item, index) => (
            <TouchableOpacity onPress={()=>navigation.navigate("TripScreen")}>
            <ImageBackground
              imageStyle={{ borderRadius: 20 }}
              key={index}
              source={item.bgImg}
              style={styles.imageBackground}
            >
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
            </ImageBackground>
            </TouchableOpacity>
            
          ))}
        </View>
      </ScrollView>
    </View>
    
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    favouriteHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "6%",
    marginLeft:10
  },
  favouriteTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: "7%",
  },
  exploreText: {
    marginRight: "4%",
    textAlign: "center",
    marginTop: "2%",
    color: "gray",
  },
  scrollContainer: {
    flexDirection: "row",marginTop:15,
    marginLeft:5
  },
  imageBackground: {
    height: 200,
    width: 170,
    marginLeft: "3%",
    marginTop: "5%",
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
    marginTop: "15%",
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
})