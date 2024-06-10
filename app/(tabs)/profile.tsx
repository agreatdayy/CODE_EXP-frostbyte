import { Image, StyleSheet, Platform, TouchableOpacity, Text, Alert, View } from 'react-native';
import React from 'react';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';

export default function profile() {
  const navigation = useNavigation();
  
  return (
    <View>
      <View style={styles.topBox}>
        <TouchableOpacity style={styles.topbutton} onPress={() => navigation.navigate('EditProfileScreen')}>
          <View style = {styles.MyContainer}>
            <Text style={styles.MyText}>Edit Profile</Text>
          </View> 
        </TouchableOpacity>
      </View>

      <ParallaxScrollView headerBackgroundColor={{ light: 'white', dark: 'white' }}
      headerImage={
        <Image
            source={require('@/assets/images/DinoMiles.jpg')}
            style={[styles.reactLogo, { alignSelf: 'center' }]}
        />
      }>

      

      <Image source={require('@/assets/images/user.jpg')} style={styles.user} />
      <Text style={styles.userLabel}>ValenElectrons</Text>

      <View style={styles.profileDetails}>
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Name:</Text>
          <View style={[styles.detailBox, styles.detailValueBox]}>
          <Text style={styles.detailValue}>Xin Yuan, Lee</Text>
        </View>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Phone No.:</Text>
          <View style={[styles.detailBox, styles.detailValueBox]}>
          <Text style={styles.detailValue}>8989 9898</Text>
        </View>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Birthday:</Text>
          <View style={[styles.detailBox, styles.detailValueBox]}>
          <Text style={styles.detailValue}>01-01-2001</Text>
        </View>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Address:</Text>
          <View style={[styles.detailBox, styles.detailValueBox]}>
          <Text style={styles.detailValue}>69 Haha Street 69 #06-09</Text>
        </View>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Postal code:</Text>
          <View style={[styles.detailBox, styles.detailValueBox]}>
          <Text style={styles.detailValue}>654321</Text>
        </View>
        </View>
      </View>

        <TouchableOpacity style={styles.topbutton} onPress={() => navigation.navigate('LogOutScreen')}>
          <View style = {styles.LogOutContainer}>
            <Text style={styles.MyText}>Log out</Text>
          </View> 
        </TouchableOpacity>

        <TouchableOpacity style={styles.topbutton} onPress={() => navigation.navigate('DeleteAccountScreen')}>
          <View style = {styles.DeleteContainer}>
            <Text style={styles.MyText}>Delete Account</Text>
          </View> 
        </TouchableOpacity>
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
      height: 45,
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
      borderColor: 'black',
      borderWidth: 2,
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
    },
    profileDetails: {
      marginTop: 20,
      paddingHorizontal: 20,
    },
    detailContainer: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    detailLabel: {
      fontWeight: 'bold',
      marginRight: 5,
      top: 5
    },
    userLabel: {
      marginRight: 5,
      top: 5,
      textAlign: 'center',
      textAlignVertical: 'center'
    },
    detailValue: {
      flex: 1,
    },
    detailBox: {
      backgroundColor: '#E5E4E2',
      padding: 5,
      borderRadius: 5,
    },
    detailValueBox: {
      backgroundColor: '#E5E4E2', // Add background color or any other styles
      padding: 5,
      borderRadius: 5,
    },
    LogOutContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 10,
      padding: 5,
      position: 'absolute',
    },
    DeleteContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderColor: 'black',
      backgroundColor: '#FF6666',
      borderWidth: 2,
      borderRadius: 10,
      padding: 5,
      position: 'absolute',
    },
    user: {
      height: 90,
      width: 90,
      alignSelf: 'center',
    },
  });

