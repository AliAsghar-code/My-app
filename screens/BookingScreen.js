import { ImageBackground, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useNavigation } from "@react-navigation/native";

const BookingScreen = () => {
    const navigation = useNavigation(); 
    const lines = [{ k: "bu" }, { k: "bu" }, { k: "bu" }];
  return (
    <View>
      <ImageBackground
      source={{
          uri: "https://media.istockphoto.com/id/1059344876/photo/holidays-tourist-relaxing-in-luxury-beach-hotel-near-luxurious-swimming-pool.jpg?s=2048x2048&w=is&k=20&c=H5bOdFmhigLoSd6bOWCuENStpEQwFRqQX81F5ZGpFvA=",
        }}
        style={{ height: "100%", width: "100%",opacity:1.9 }}>
        <View style={{marginTop:"23%"}}>
            <View style={{flexDirection:"row",marginTop:"-10%",margin:"10%",justifyContent:"space-between"}}>
            <TouchableOpacity onPress={()=>navigation.navigate("HomeScreen")} >
            <AntDesign name="arrowleft" size={24} color="black" />
           </TouchableOpacity>
           <TouchableOpacity>
           <AntDesign name="heart" size={24} color="red" />
           </TouchableOpacity>
           </View>
           <View style={{margin:"10%",justifyContent:"center"}}>
            <Text style={{marginTop:"40%",color:"white",fontWeight:"bold",fontSize:14}}>Favourite place  </Text>
            <Text style={{color:"white",fontWeight:"bold",fontSize:35,marginTop:8}}>Kuta Beach</Text>
            <View style={{flexDirection:"row",marginTop:"4%"}}>
            <EvilIcons name="location" size={23} color="white" />
            <Text style={{color:"white",fontWeight:"bold",fontSize:12}}>Bali 's Indonesia</Text>
            </View>
            <View style={{flexDirection:"row",alignItems:"center"}}>
            <Text style={{color:"white",marginTop:"5%",fontWeight:"bold",fontSize:13}}>100+ people have explore</Text>
            <View  style={{ height: 35, width: 35,borderRadius:18,overflow:"hidden",marginLeft:"9%",marginTop:3 }}>
            <Image 
                source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq26NGyIcDVZPc4w-GSmOI4R907rAafHWDHw&s",
        }}
        style={{width:'100%',height:'100%'}}
       />
       </View>
       <View  style={{ height:35,backgroundColor:'green', width:35,borderRadius:18, overflow:'hidden',marginTop:3 }}>
            <Image 
                source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuU5ZJrh8n1sfUd1Gge_vSDT7pJnbalgNSKQ&s",
        }}
        style={{width:'100%',height:'100%'}}
       />
       </View>
       <View  style={{ height: 35, width: 35,borderRadius:18,overflow:"hidden",marginTop:3 }}>
            <Image 
                source={{
          uri: "https://media.istockphoto.com/id/1935590814/photo/summer-beach-bag-and-accessories-on-sandy-beach-and-sea.webp?a=1&b=1&s=612x612&w=0&k=20&c=wgRmhvnqR8xN4_Vfkxnusf1ie220ERr32QQOoSu1ZrE=",
        }}
        style={{width:'100%',height:'100%'}}
       />
       
       </View>
       <View  style={{ height: 35, width: 35,borderRadius:18,overflow:"hidden",marginTop:3 }}>
            <Image 
                source={{
          uri: "https://media.istockphoto.com/id/1935590814/photo/summer-beach-bag-and-accessories-on-sandy-beach-and-sea.webp?a=1&b=1&s=612x612&w=0&k=20&c=wgRmhvnqR8xN4_Vfkxnusf1ie220ERr32QQOoSu1ZrE=",
        }}
        style={{width:'100%',height:'100%'}}
       />
       
       </View>
            </View>
           </View>
           <View style={{ flexDirection: "row", marginTop: -17, width: "90%",margin:"5%" }}>
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
                  width: "90%",
                  height: 2,
                  backgroundColor: index === 0 ? "white" : "gray",
                }}
              />
            </View>
          ))}
        </View>
        <View style={{marginHorizontal:"5%",marginTop:"5%",marginLeft:"7%"}}>
            <Text style={{color:"white",fontWeight:"bold" ,fontSize:12}}>Boli is an island in indonasia for its verdant</Text>
            <Text style={{color:"white",fontWeight:"bold",fontSize:12,marginTop:3}}>volcanoes, unique rice terraces, beaches and beautiful</Text>
            <Text style={{color:"white",fontWeight:"bold" ,fontSize:12 ,marginTop:3}}>coral, refers. Before Become a tourist attraction, Kuta</Text>
            <Text style={{color:"white",fontWeight:"bold" ,fontSize:12 ,marginTop:3}}>was a trading part where local product were traded to</Text>
            <Text style={{color:"white",fontWeight:"bold" ,fontSize:12 ,marginTop:3}}>buyer for outside bali</Text>
        </View>
        <View style={{marginLeft:"6%",marginTop:"2%",flexDirection:"row"}}>
        <AntDesign name="star" size={24} color="orange"  style={{marginTop:"5%"}}/>
            <Text style={{fontWeight:"bold",fontSize:20,color:"white",marginTop:"5%"}}>4,8</Text>
        </View>
        <View style={{margin:"5%",flexDirection:"row",marginTop:"23%"}}>
            <Text style={{fontWeight:"bold",color:"white",fontSize:16,marginTop:"5%",marginLeft:5}}>$245.00 /person</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("KutaBeachScreen")}>
            <View style={{marginLeft:"23%",borderRadius:10,backgroundColor:"orange", paddingVertical: 12, paddingHorizontal: 25,  alignItems: 'center',  justifyContent: 'center',}}>
                <Text style={{color:"white",fontSize: 19, fontWeight:"bold"}}>Booking</Text>
            </View>
            </TouchableOpacity>
           
        </View>
        </View>
            
        
        </ImageBackground>
        
    </View>
    
  )
}

export default BookingScreen

const styles = StyleSheet.create({})