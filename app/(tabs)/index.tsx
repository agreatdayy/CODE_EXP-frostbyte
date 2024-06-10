import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer,  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Camera, CameraType } from 'expo-camera/legacy';

import HomeScreen from '../(screens)/HomeScreen';
import FoodAndBeveragesScreen from '@/app/(screens)/FoodAndBeveragesScreen';
import HomeAppliancesScreen from '@/app/(screens)/HomeAppliancesScreen';
import TransportScreen from '@/app/(screens)/TransportScreen';
import RecyclingScreen from '@/app/(screens)/RecyclingScreen';
import FAQsScreen from '@/app/(screens)/FAQsScreen'
import volunteer from './volunteer';
import scan from './scan';
import rewards from './rewards';
import profile from './profile';
import MyVolunteerEventsScreen from '../(screens)/MyVolunteerEventsScreen';
import MyRewardsScreen from '../(screens)/MyRewardsScreen';
import EditProfileScreen from '../(screens)/EditProfileScreen';
import LogOutScreen from '../(screens)/LogOutScreen';
import DeleteAccountScreen from '../(screens)/DeleteAccountScreen';
import SignUpScreen from '../(screens)/SignUpScreen';
import LogInScreen from '../(screens)/LogInScreen';

const Stack = createStackNavigator();

function App() {
  
  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen 
            name="Volunteer" 
            component={volunteer} 
            initialParams={{ id: 'volunteer' }} 
          />
        <Stack.Screen 
            name="Scan" 
            component={scan} 
            initialParams={{ id: 'scan' }} 
          />
        <Stack.Screen 
            name="Rewards" 
            component={rewards}
            initialParams={{ id: 'rewards' }} 
          />
        <Stack.Screen 
            name="Profile" 
            component={profile}  
            initialParams={{ id: 'profile' }}
          />
        <Stack.Screen 
            name="FoodAndBeverages" 
            component={FoodAndBeveragesScreen} 
            initialParams={{ id: 'foodAndBeverage' }}
          />
        <Stack.Screen 
            name="HomeAppliances" 
            component={HomeAppliancesScreen}
            initialParams={{ id: 'homeAppliances' }} 
          />
        <Stack.Screen 
            name="Transport" 
            component={TransportScreen} 
            initialParams={{ id: 'transport' }}
          />
        <Stack.Screen 
            name="Recycling" 
            component={RecyclingScreen} 
            initialParams={{ id: 'recycling' }}
          />
        <Stack.Screen 
            name="FAQs" 
            component={FAQsScreen} 
            initialParams={{id: 'FAQs'}}
          />
        <Stack.Screen 
          name="MyVolunteerEventsScreen" 
          component={MyVolunteerEventsScreen} 
          initialParams={{id: 'MyVolunteerEventsScreen'}}
        />
        <Stack.Screen 
          name="MyRewardsScreen" 
          component={MyRewardsScreen} 
          initialParams={{id: 'MyRewardsScreen'}}
        />
        <Stack.Screen 
          name="EditProfileScreen" 
          component={EditProfileScreen} 
          initialParams={{id: 'EditProfileScreen'}}
        />
        <Stack.Screen 
          name="LogOutScreen" 
          component={LogOutScreen} 
          initialParams={{id: 'LogOutScreen'}}
        />
        <Stack.Screen 
          name="DeleteAccountScreen" 
          component={DeleteAccountScreen} 
          initialParams={{id: 'DeleteAccountScreen'}}
        />
        <Stack.Screen 
          name="SignUpScreen" 
          component={SignUpScreen} 
          initialParams={{id: 'SignUpScreen'}}
        />
        <Stack.Screen 
          name="LogInScreen" 
          component={LogInScreen} 
          initialParams={{id: 'LogInScreen'}}
        />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;