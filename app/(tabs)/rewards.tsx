import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import React from 'react';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';

export default function Rewards() {
  const navigation = useNavigation();

  return ( 
    <View>
      <View style={styles.topBox}>
        <TouchableOpacity style={styles.topbutton} onPress={() => navigation.navigate('MyRewardsScreen')}>
          <View style = {styles.MyContainer}>
            <Text style={styles.MyText}>My Rewards</Text>
          </View> 
        </TouchableOpacity>
      </View>
      
      <ParallaxScrollView
          headerBackgroundColor={{ light: 'white', dark: 'white' }}
          headerImage={
          <Image
              source={require('@/assets/images/DinoMiles.jpg')}
              style={[styles.reactLogo, { alignSelf: 'center' }]}
          />
          }>
      
    <ThemedView style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonContent}>
        <View style = {styles.PointEventContainer}>
            <Image source={require('@/assets/images/train.jpg')} style={styles.image} />
            <Text style={styles.buttonText}>$1 Transport Credit</Text>
        </View>
        <View style = {styles.AddPointsContainer}>
            <Text style={styles.AddPointsText}>Redeem</Text>
        </View>
        </View>
        <View style={styles.additionalContent}>
            <Text style={styles.AddPointsSecondLine}>100</Text>
            <Image source={require('@/assets/images/DinoMiles.jpg')} style={styles.DinoIcon} />
        </View>
      </TouchableOpacity>
    </ThemedView>

    <ThemedView style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonContent}>
        <View style = {styles.PointEventContainer}>
            <Image source={require('@/assets/images/shopping-cart.jpg')} style={styles.image} />
            <Text style={styles.buttonText}>$5 FairPrice Voucher</Text>
        </View>
        <View style = {styles.AddPointsContainer}>
            <Text style={styles.AddPointsText}>Redeem</Text>
        </View>
        </View>
        <View style={styles.additionalContent}>
            <Text style={styles.AddPointsSecondLine}>500</Text>
            <Image source={require('@/assets/images/DinoMiles.jpg')} style={styles.DinoIcon} />
        </View>
      </TouchableOpacity>
    </ThemedView>

    <ThemedView style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonContent}>
        <View style = {styles.PointEventContainer}>
            <Image source={require('@/assets/images/bbt.jpg')} style={styles.image} />
            <Text style={styles.buttonText}>$5 ChiCha Voucher</Text>
        </View>
        <View style = {styles.AddPointsContainer}>
            <Text style={styles.AddPointsText}>Redeem</Text>
        </View>
        </View>
        <View style={styles.additionalContent}>
            <Text style={styles.AddPointsSecondLine}>500</Text>
            <Image source={require('@/assets/images/DinoMiles.jpg')} style={styles.DinoIcon} />
        </View>
      </TouchableOpacity>
    </ThemedView>

    <ThemedView style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonContent}>
        <View style = {styles.PointEventContainer}>
            <Image source={require('@/assets/images/discount.jpg')} style={styles.image} />
            <Text style={styles.buttonText}>5% Discount Voucher</Text>
        </View>
        <View style = {styles.AddPointsContainer}>
            <Text style={styles.AddPointsText}>Redeem</Text>
        </View>
        </View>
        <View style={styles.additionalContent}>
            <Text style={styles.AddPointsSecondLine}>300</Text>
            <Image source={require('@/assets/images/DinoMiles.jpg')} style={styles.DinoIcon} />
        </View>
      </TouchableOpacity>
    </ThemedView>
      </ParallaxScrollView>
    </View>
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
  topBox: {
    height: 40,
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
  DinoIcon: {
    height: 25,
    width: 25,
    marginLeft: 65,
    marginRight: 50,
    right: 25
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
      backgroundColor: '#29AB87',
      borderRadius: 10,
      padding: 5
    },
  AddPointsText: {
    fontSize: 14,
    fontWeight: 'bold',
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
  right: 20,
  },
  MyText: {
  fontSize: 14,
  fontWeight: 'bold',
  margin:3,
  },
  additionalContent: {
    flexDirection: 'row', 
    alignItems: 'center', 
}
});
