import { Image, StyleSheet, TouchableOpacity, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useNavigation } from '@react-navigation/native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function LogInScreen() {
  const navigation = useNavigation();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  return ( 
    <ParallaxScrollView headerBackgroundColor={{ light: 'white', dark: 'white' }}>
    
      <View style={styles.container}>
        <Image 
          source={require('@/assets/images/DinoMiles.jpg')} 
          style={styles.homeDino} 
        />
      </View>
        
      <ThemedView style={styles.titleContainer}>
          <ThemedText type="title" style={styles.dinoMilesText}>DinoMiles</ThemedText>
      </ThemedView>

      <View style={styles.profileDetails}>
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Username:</Text>
          <TextInput
            style={[styles.detailBox]}
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Password:</Text>
          <TextInput
            style={[styles.detailBox]}
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>

      <TouchableOpacity style={[styles.button, styles.logOutButton]} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.logOutText}>Log In</Text>
      </TouchableOpacity>
      
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={styles.signText}>New? Sign up now!</Text>
        </TouchableOpacity>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', 
        marginBottom: 15,
        gap: 8,
    },
    dinoMilesText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    topButtonBox: {
      alignItems: 'flex-end',
      padding: 10,
      backgroundColor: 'white',
    },
    topbutton: {
      backgroundColor: 'transparent',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderColor: '#C4C4C4', // Outline color
      borderWidth: 2,      // Outline thickness
      borderRadius: 10,     // Outline border radius
    },
    MyText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#6A6A6A',
    },
    profileDetails: {
      paddingHorizontal: 20,
    },
    detailContainer: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    detailLabel: {
      fontWeight: 'bold',
      marginRight: 5,
      minWidth: 100,
      color: '#6A6A6A',
      top: 10,
    },
    detailBox: {
      top: 10,
      flex: 1,
      padding: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#C4C4C4',
    },
    user: {
      height: 90,
      width: 90,
      alignSelf: 'center',
    },
    button: {
        marginHorizontal: 20,
        marginVertical: 10,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
      },
    logOutButton: {
        backgroundColor: '#29AB87',
    },
    logOutText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    signText: {
        fontSize: 16,
        color: 'black',
        textDecorationLine: 'underline',
    },
    homeDino: {
        width: 200, 
        height: 200, 
        marginLeft: 5, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        alignSelf: 'center',
    },
  });