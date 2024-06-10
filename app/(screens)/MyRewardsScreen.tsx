import { Image, StyleSheet, Platform, TouchableOpacity, Text, Alert, View } from 'react-native';
import React from 'react';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';


export default function MyRewardsScreen({ navigation }) {
  
  return (
      <ParallaxScrollView headerBackgroundColor={{ light: 'white', dark: 'white' }}
      headerImage={
      <Image
          source={require('@/assets/images/DinoMiles.jpg')}
          style={[styles.reactLogo, { alignSelf: 'center' }]}
      />
      }>

      <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Available Rewards</ThemedText>
      </ThemedView>
  
      <ThemedView style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                  <View style={styles.buttonContent}>
                  <View style = {styles.PointEventContainer}>
                      <Image source={require('@/assets/images/train.jpg')} style={styles.image} />
                      <Text style={styles.buttonText}>$10 Transport Credit</Text>
                  </View>
                  </View>
                  <Text style={styles.AddPointsSecondLine}>Expiry: 25 Aug 2024</Text>
              </TouchableOpacity>
              </ThemedView>
  
      <ThemedView style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                  <View style={styles.buttonContent}>
                  <View style = {styles.PointEventContainer}>
                      <Image source={require('@/assets/images/bbt.jpg')} style={styles.image} />
                      <Text style={styles.buttonText}>$5 Chicha Voucher</Text>
                  </View>
                  </View>
                  <Text style={styles.AddPointsSecondLine}>Expiry: 12 Sep 2024</Text>
              </TouchableOpacity>
              </ThemedView>
  
  
      </ParallaxScrollView>
    );

    
}


const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start', 
      marginBottom: 15,
      gap: 8,
    },
    reactLogo: {
      alignItems: 'center',
      height: 240,
      width: 240,
      position: 'relative',
      backgroundColor: 'transparent',
    },
    topbox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      alignSelf: 'center',
      margin: 16,
      backgroundColor: '#E5E4E2',
      borderRadius: 10,
    },
    topBoxContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      left: 15,
    },
    linkbox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      alignSelf: 'center',
      margin: 16,
      backgroundColor: '#E5E4E2',
      borderRadius: 10,
    },
    linkBoxContainer: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    buttonContainer: {
      alignItems: 'center', 
    },
    button: {
      backgroundColor: 'white',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      borderColor: 'black',
      borderWidth: 1,
      alignSelf: 'stretch',
      marginVertical: 6,
    },
    topbutton: {
      backgroundColor: 'white',
      paddingVertical: 20,
      paddingHorizontal: 40,
      alignSelf: 'stretch',
      marginVertical: 6,
      alignItems: 'center',
      flex: 1,
    },
    buttonContent: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      width: '100%',
    },
    buttonText: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
    },
    bigText: {
      color: 'green',
      fontSize: 30,
      fontWeight: 'bold',
    },
    quoteText: {
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
      flexWrap: 'wrap',
      flexShrink: 1,
    },
    contentContainer: {
      flexDirection: 'row',
      alignItems: 'center', // Align items vertically within the container
    },
    container: {
      flexDirection: 'row', // Arrange items horizontally
      justifyContent: 'space-around',
      width: '100%',
      alignSelf: 'center',
    },
    buttonTextFirstLine: {
      fontSize: 18, // Adjust font size as needed
      fontWeight: 'bold', // Add font weight if desired
    },
    buttonTextSecondLine: {
      fontSize: 14,
    },
    AddPointsSecondLine: {
      left: 40,
    },
    SecondLine: {
      fontSize: 14, // Adjust font size as needed
      left: 5
    },
    image: {
      height: 30,
      width: 30,
      marginLeft: 5,
      marginRight: 5,
    },
    bigDino: {
        width: 100,
        height: 100,
      },
    PointEventContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'center', // Center the content horizontally
      },
      AddPointsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
    AddPointsText: {
      fontSize: 16,
      fontWeight: 'bold'
    },
    MyContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#29AB87',
      borderRadius: 10,
      padding: 5,
      position: 'absolute',
    top: 0,
    right: 10
    },
    MyText: {
    fontSize: 14,
    fontWeight: 'bold',
    margin:3,
  }
  });
  