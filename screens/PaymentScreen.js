import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react'; // Make sure to import useState
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";

const PaymentScreen = () => {
    const navigation = useNavigation();
    const [selectedMethod, setSelectedMethod] = useState(null); 

    const paymentMethods = [
        {
            id: 'credit-card',
            label: 'Credit Card',
            imageUri: 'https://w7.pngwing.com/pngs/962/794/png-transparent-mastercard-credit-card-mastercard-logo-mastercard-logo-love-text-heart.png'
        },
        {
            id: 'paypal',
            label: 'PayPal',
            imageUri: 'https://w7.pngwing.com/pngs/720/939/png-transparent-paypal-computer-icons-logo-paypal-blue-angle-service-thumbnail.png'
        },
        {
            id: 'apple-pay',
            label: 'Apple Pay',
            imageUri: 'https://w7.pngwing.com/pngs/186/863/png-transparent-apple-logo-apple-logo-computer-wallpaper-silhouette.png'
        }
    ];

    return (
        <View>
            <View style={{flexDirection:"row", marginTop:"15%", justifyContent:"space-between", margin:"10%"}}>
                <TouchableOpacity onPress={() => navigation.navigate("DetailBookingScreen")}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{fontWeight:"bold", marginRight:"30%", alignSelf:"center"}}>Payment Methods</Text>
            </View>
            <View>
                {paymentMethods.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={[styles.categoryContainer, selectedMethod === item.id ? styles.selectedContainer : null]}
                        onPress={() => setSelectedMethod(item.id)}
                    >
                        <Image source={{ uri: item.imageUri }} style={styles.categoryImage} />
                        <Text style={styles.categoryText}>{item.label}</Text>
                        {selectedMethod === item.id && (
                            <AntDesign name="checkcircle" size={20} color="green" />
                        )}
                    </TouchableOpacity>
                ))}
            </View>
            <View style={{margin:"8%",flexDirection:"row",justifyContent:"center",alignSelf:"center",marginTop:"75%"}}>
            <Text style={{fontWeight:"bold",color:"gray",fontSize:15,marginTop:"6%",marginLeft:"20%"}}>Total</Text>
            <Text style={{fontWeight:"bold",color:"orange",fontSize:19,marginTop:"5%"}}> $1490.00</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("PayScreen")} >
            <View style={{marginLeft:"11%",borderRadius:10,backgroundColor:"orange", paddingVertical: 12, paddingHorizontal: 25,  alignItems: 'center',  justifyContent: 'center',}}>
                <Text style={{color:"black",fontSize: 17, fontWeight:"bold"}}> Process Payment</Text>
            </View>
            </TouchableOpacity>
           
        </View>
        </View>
    );
}

export default PaymentScreen;

const styles = StyleSheet.create({
    categoryContainer: {
        alignItems: "center",
        flexDirection: "row",
        marginTop: "8%",
        marginLeft: "10%",
        borderColor: "green",
        borderRadius: 15,
        borderWidth: 1,
        padding: 15,
        width: "80%",
        justifyContent: "space-between",
        backgroundColor: 'white' // Default background color
    },
    selectedContainer: {
        backgroundColor: '#e0f7fa', // Change color if selected
    },
    categoryImage: {
        height: 30,
        width: 30,
        borderRadius: 50,
    },
    categoryText: {
        fontWeight: "bold",
        marginTop: "1%",
        marginRight: "44%"
    },
});
