import { StyleSheet, Text, View } from 'react-native'
import SplashScreen from './../screens/SplashScreen';
import SignInScreen from '../screens/SignInScreen';
import ForGotPassword from './../screens/ForGotPassword';
import CreateNewPassword from './../screens/CreateNewPassword';
import CreateAccount from './../screens/CreateAccount';
import Email from './../screens/Email';
import PasswordScreen from './../screens/PasswordScreen';
import Verification from './../screens/Verification';
import EndAccount from './../screens/EndAccount';
import FavouritePlace from './../screens/FavouritePlace';
import HomeScreen from './../screens/HomeScreen';
import BookingScreen from '../screens/BookingScreen';
import KutaBeachScreen from './../screens/KutaBeachScreen';
import SearchScreen from './../screens/SearchScreen';
import TripScreen from './../screens/TripScreen';
import CategoryScreen from './../screens/CategoryScreen';
import FilterScreen from './../screens/FilterScreen';
import DateScreen from './../screens/DateScreen';
import DetailBookingScreen from '../screens/DetailBookingScreen ';
import PaymentScreen from './../screens/PaymentScreen';
import PayScreen from './../screens/PayScreen';
import SuccessScreen from './../screens/SuccessScreen';
import ListTrip from './../screens/ListTrip';
import WishList from './../screens/WishList';
import Profile from './../screens/Profile';
import NotificationScreen from './../screens/NotificationScreen';
import OnBodingScreen1 from '../screens/OnBodingScreen1';
import OnBodingScreen2 from '../screens/OnBodingScreen2';
import OnBodingScreen3 from '../screens/OnBodingScreen3';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
const Stack = createNativeStackNavigator();


const StackNavigation = () => {
  return (
    <Stack.Navigator>
          <Stack.Screen 
          name="Splash" 
          component={SplashScreen} 
          options={{ headerShown: false }} // Hide the header if desired
        />
        <Stack.Screen 
          name="OnBoding1" 
          component={OnBodingScreen1} 
          options={{ headerShown: false }} // Custom title for the header
        />
        <Stack.Screen 
          name="OnBoding2" 
          component={OnBodingScreen2} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="OnBoding3" 
          component={OnBodingScreen3} 
          options={{ headerShown: false }}
        />
         <Stack.Screen 
          name="SignInScreen" 
          component={SignInScreen} 
          options={{ headerShown: false }}
        /> 
          <Stack.Screen 
          name="ForGotPassword" 
          component={ForGotPassword} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="CreateNewPassword" 
          component={CreateNewPassword} 
          options={{ headerShown: false }}
        />
          <Stack.Screen 
          name="CreateAccount" 
          component={CreateAccount} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Email" 
          component={Email} 
          options={{ headerShown: false }}
        />
         <Stack.Screen 
          name="PasswordScreen" 
          component={PasswordScreen} 
          options={{ headerShown: false }}
        /> 
        <Stack.Screen 
          name="Verification" 
          component={Verification} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="EndAccount" 
          component={EndAccount} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="FavouritePlaces" 
          component={FavouritePlace} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="HomeScreen" 
          component={BottomTabNavigation} 
          options={{ headerShown: false }}
        />
         <Stack.Screen 
          name="BookingScreen" 
          component={BookingScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="KutaBeachScreen" 
          component={KutaBeachScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="SearchScreen" 
          component={SearchScreen} 
          options={{ headerShown: false }}
        /> 
        <Stack.Screen 
          name="TripScreen" 
          component={TripScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="CategoryScreen" 
          component={CategoryScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="FilterScreen" 
          component={FilterScreen} 
          options={{ headerShown: false }}
        />
         <Stack.Screen 
          name="DateScreen" 
          component={DateScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="DetailBookingScreen" 
          component={DetailBookingScreen} 
          options={{ headerShown: false }}
        />
         <Stack.Screen 
          name="PaymentScreen" 
          component={PaymentScreen} 
          options={{ headerShown: false }}
        />
         <Stack.Screen 
          name="PayScreen" 
          component={PayScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="SuccessScreen" 
          component={SuccessScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="ListTrip" 
          component={BottomTabNavigation} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="WishList" 
          component={WishList} 
          options={{ headerShown: false }}
        />
          <Stack.Screen 
          name="Profile" 
          component={Profile} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="NotificationScreen" 
          component={NotificationScreen} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      
  )
}

export default StackNavigation

