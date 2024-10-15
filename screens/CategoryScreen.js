import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import AntDesign from "@expo/vector-icons/AntDesign";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const TripScreen = () => {
  const navigation = useNavigation(); 
  const [searchQuery, setSearchQuery] = useState('');

  const cityData = [
    
    { 
      cityImg: {
        uri: "https://media.istockphoto.com/id/1059344876/photo/holidays-tourist-relaxing-in-luxury-beach-hotel-near-luxurious-swimming-pool.jpg?s=2048x2048&w=is&k=20&c=H5bOdFmhigLoSd6bOWCuENStpEQwFRqQX81F5ZGpFvA=",
      },
      destinationName: "Kuta Beach",
      price: "745.00",
      rating: 5
    },
    {
      cityImg: {
        uri: "https://media.istockphoto.com/id/1594228594/photo/close-up-image-of-a-young-creative-artists-hands-smeared-with-watercolors-holding-a-spatula.webp?a=1&b=1&s=612x612&w=0&k=20&c=xa5TCz_W8_o8PWhseGHgk6pzQ8xpcCO1yuOXFDTBZU8=",
      },
      destinationName: "Painting",
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
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR13yeF2JgXOFr433EylkdtuK6Gh3ZBZHkNGQ&s",
      },
      destinationName: "Mandalika Resort",
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
  const profileImg = {
    uri: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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

  // Filtered data based on search query
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
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          marginTop: "20%",
          margin: "10%",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('TripScreen')}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontWeight: "bold", marginTop: 3, fontSize: 17 }}>Category</Text>
        <MaterialCommunityIcons name="tune" size={24} color="black" />
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
            backgroundColor: "#d3d3d3"
          }}
          placeholder="Search destination"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={{
          position: "absolute",
          right: 15,
          top: 10,
        }}>
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView  nestedScrollEnabled={true}
       horizontal={true}
       showsHorizontalScrollIndicator={false}
      contentContainerStyle = {{paddingEnd:"55%"}}>
      <View style={{flexDirection: "row",
    marginTop: "8%",
    marginLeft: "7%",
    width:"95%"}}  >
      <View style={{flexDirection:"row",borderWidth:2,borderRadius:17,borderColor:"rgba(211, 211, 211, 0.8)",alignItems:"center"}}>
      <View style={{width:35,height:40,borderRadius:15,backgroundColor:"rgba(211, 211, 211, 0.4)"}}>
      <Image source={beachImg} style={styles.categoryImage} />
      </View>
      
      <Text style={styles.categoryText}>Beach</Text></View>
      
      
      <View style={{flexDirection:"row",borderWidth:2,borderRadius:17,borderColor:"rgba(211, 211, 211, 0.8)",alignItems:"center",marginLeft:"3%"}}>
      <View style={{width:35,height:40,borderRadius:15,backgroundColor:"rgba(211, 211, 211, 0.4)"}}>
      <Image source={mountainImg} style={styles.categoryImage} />
      </View>
      
      <Text style={styles.categoryText}>Mountain</Text></View>
      <View style={{flexDirection:"row",borderWidth:2,padding:1,borderRadius:17,borderColor:"rgba(211, 211, 211, 0.8)",alignItems:"center",marginLeft:"3%"}}>
      <View style={{width:35,height:40,borderRadius:15,backgroundColor:"rgba(211, 211, 211, 0.4)"}}>
      <Image source={forestImg} style={styles.categoryImage} />
      </View>
      
      <Text style={styles.categoryText}>Forest</Text></View>
      <View style={{flexDirection:"row",borderWidth:2,padding:1,borderRadius:17,borderColor:"rgba(211, 211, 211, 0.8)",alignItems:"center",marginLeft:"3%"}}>
      <View style={{width:35,height:40,borderRadius:15,backgroundColor:"rgba(211, 211, 211, 0.4)"}}>
      <Image source={oceanImg} style={styles.categoryImage} />
      </View>
      
      <Text style={styles.categoryText}>Ocean</Text></View>
      <View style={{flexDirection:"row",borderWidth:2,padding:1,borderRadius:17,borderColor:"rgba(211, 211, 211, 0.8)",alignItems:"center",marginLeft:"3%"}}>
      <View style={{width:35,height:40,borderRadius:15,backgroundColor:"rgba(211, 211, 211, 0.4)"}}>
      <Image source={campingImg} style={styles.categoryImage} />
      </View>
      
      <Text style={styles.categoryText}>Camping</Text></View>
      </View>
        
        
      </ScrollView>

     

      <View style={{ flex: 1, marginTop: "7%" }}>
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
      </View>
    </ScrollView>
  )
}

export default TripScreen

const styles = StyleSheet.create({
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
    height: "95%",
    width: "50%",
    borderRadius: 10,
    top:3
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
  categoryContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: "8%",
    marginLeft: "2%",
    width:"95%"
  },
  categoryImage: {
    height: 30,
    width: 30,
    borderRadius: 50,
    justifyContent:"center",
    alignSelf:"center",
    top:5
  },
  categoryText: {
    fontWeight: "bold",
    marginTop: "5%",
    marginLeft: "6%",
  },
});
