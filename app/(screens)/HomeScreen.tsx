import { Image, StyleSheet, Platform, TouchableOpacity, Text, Alert, View } from 'react-native';
import React from 'react';

// import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';

export type RootStackParamList = {
  screen: { id: string };
};

export default function HomeScreen({ navigation }) {
  
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
    <View style={styles.container}>
      <TouchableOpacity style={styles.topbutton} onPress={() => navigation.navigate('rewards')}>
        <View style={styles.contentContainer}>
          <Text style={styles.buttonTextFirstLine}>1789</Text>
          <Image source={require('@/assets/images/DinoMiles.jpg')} style={styles.image} />
        </View>
        <Text style={styles.buttonTextSecondLine}>My DinoMiles</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.topbutton} onPress={() => navigation.navigate('rewards')}>
        <View style={styles.contentContainer}>
          <Text style={styles.buttonTextFirstLine}>2</Text>
          <Image source={require('@/assets/images/ticket.jpg')} style={styles.image} />
        </View>
        <Text style={styles.buttonTextSecondLine}>My Rewards</Text>
      </TouchableOpacity>
    </View>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Discover</ThemedText>
      </ThemedView>
        <ThemedView style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FoodAndBeverages')}>
          <View style={styles.buttonContent}>
            <Ionicons name="fast-food-outline" size={24} color="black" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Food and Beverages</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeAppliances')}> 
          <View style={styles.buttonContent}>
            <Ionicons name="home-outline" size={24} color="black" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Home Appliances</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Transport')}>
        <View style={styles.buttonContent}>
            <Ionicons name="bus-outline" size={24} color="black" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Public Transport</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Recycling')}>
        <View style={styles.buttonContent}>
          <Ionicons name="sync-outline" size={24} color="green" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Recycling</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FAQs')}>
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
  topbutton: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 4,
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'stretch',
    marginVertical: 6,
    alignItems: 'center',
    flex: 1,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignSelf: 'center',
  },
  buttonTextFirstLine: {
    fontSize: 18, 
    fontWeight: 'bold',
  },
  buttonTextSecondLine: {
    fontSize: 18,
  },
  image: {
    width: 30, 
    height: 25, 
    marginLeft: 5, 
  },
});
