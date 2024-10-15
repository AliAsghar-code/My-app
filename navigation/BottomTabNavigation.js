import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ListTrip from '../screens/ListTrip';

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen}  options={{ 
          tabBarStyle: { display: "none",}, // Show tab bar
        }}  />
        <Tab.Screen name="ListTrip" component={ListTrip}  options={{ 
          tabBarStyle: { display: "none",}, // Show tab bar
        }}  />
      
    </Tab.Navigator>
  );
}
export default BottomTabNavigation;