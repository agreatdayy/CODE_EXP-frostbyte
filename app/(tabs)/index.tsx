import { Image, StyleSheet, Platform, TouchableOpacity, Text, Alert, View } from 'react-native';
import React from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const handleButtonPress = () => {
    Alert.alert("Button Pressed", "You pressed the Food and Beverage button!");
  };
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: 'white', dark: 'white' }}
      headerImage={
        <Image
          source={require('@/assets/images/DinoMiles.jpg')}
          style={[styles.reactLogo, { alignSelf: 'center' }]}
        />
      }>
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hello, Xin Yuan!</ThemedText>
      </ThemedView>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <View style={styles.contentContainer}>
          <Text style={styles.buttonTextFirstLine}>1789</Text>
          <Image source={require('@/assets/images/DinoMiles.jpg')} style={styles.image} />
        </View>
        <Text style={styles.buttonTextSecondLine}>DinoMiles</Text>
      </TouchableOpacity>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Discover</ThemedText>
      </ThemedView>
        <ThemedView style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <View style={styles.buttonContent}>
            <Ionicons name="fast-food-outline" size={24} color="black" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Food and Beverages</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <View style={styles.buttonContent}>
            <Ionicons name="home-outline" size={24} color="black" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Home Appliances</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <View style={styles.buttonContent}>
            <Ionicons name="bus-outline" size={24} color="black" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Public Transport</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <View style={styles.buttonContent}>
          <Ionicons name="sync-outline" size={24} color="green" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Recycling</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <View style={styles.buttonContent}>
            <Ionicons name="help-outline" size={24} color="black" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>FAQs</Text>
          </View>
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
    marginBottom: 6,
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    alignItems: 'center',
    height: 240,
    width: 240,
    position: 'relative',
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    margin: 16, 
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
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center', // Center the content horizontally
  },
  buttonIcon: {
    marginRight: 10, // Add some margin between the icon and the text
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically within the container
  },
  buttonTextFirstLine: {
    fontSize: 18, // Adjust font size as needed
    fontWeight: 'bold', // Add font weight if desired
    // Add other styles as needed
  },
  buttonTextSecondLine: {
    fontSize: 18, // Adjust font size as needed
    // Add other styles as needed
  },
  image: {
    width: 30, // Adjust width as needed
    height: 25, // Adjust height as needed
    marginLeft: 5, // Add some spacing between the text and the image
    // Add other styles as needed
  },
});
