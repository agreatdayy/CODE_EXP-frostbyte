import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer,  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../(screens)/HomeScreen';
import FoodAndBeveragesScreen from '@/app/(screens)/FoodAndBeveragesScreen';
import HomeAppliancesScreen from '@/app/(screens)/HomeAppliancesScreen';
import PublicTransportScreen from '@/app/(screens)/PublicTransportScreen';
import RecyclingScreen from '@/app/(screens)/RecyclingScreen';
import FAQsScreen from '@/app/(screens)/FAQsScreen'
import volunteer from './volunteer';
import scan from './scan';
import rewards from './rewards';
import profile from './profile';

const Stack = createStackNavigator();

function App() {
  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Volunteer" component={volunteer} />
        <Stack.Screen name="Scan" component={scan} />
        <Stack.Screen 
            name="Rewards" 
            component={rewards}
            initialParams={{ id: 'rewards' }} 
        />
        <Stack.Screen name="Profile" component={profile} />
        {/* <Stack.Screen 
            name="FoodAndBeverages" 
            component={FoodAndBeveragesScreen} 
            initialParams={{ id: 'FoodAndBeverage' }} */}
        {/* <Stack.Screen name="HomeAppliances" component={HomeAppliancesScreen} /> */}
        {/* <Stack.Screen name="PublicTransport" component={PublicTransportScreen} /> */}
        <Stack.Screen 
            name="Recycling" 
            component={RecyclingScreen} 
            initialParams={{ id: 'recycling' }}
        />
        {/* <Stack.Screen name="FAQs" component={FAQsScreen} /> */}
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;