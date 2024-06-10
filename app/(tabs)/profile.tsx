import { Image, StyleSheet, Platform, TouchableOpacity, Text, Alert, View } from 'react-native';
import React from 'react';
import { useState } from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';

export default function Profile() {
  const navigation = useNavigation();
  const [profileImage, setProfileImage] = useState(require('@/assets/images/user.jpg')); // Default profile image

  const selectImage = () => {
    launchImageLibrary({
      mediaType: 'video'
    }, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.assets[0].uri };
        setProfileImage(source);
      }
    });
  };

  return (
    <ParallaxScrollView headerBackgroundColor={{ light: 'white', dark: 'white' }}>

      <View style={styles.topButtonBox}>
        <TouchableOpacity style={styles.topbutton} onPress={() => navigation.navigate('EditProfileScreen')}>
          <Text style={styles.MyText}>Edit</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={selectImage}>
        <Image source={profileImage} style={styles.user} />
      </TouchableOpacity>
      <Text style={styles.userLabel}>ValenElectrons</Text>

      <View style={styles.profileDetails}>
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Name:</Text>
          <View style={[styles.detailBox]}>
            <Text style={styles.detailValue}>Xin Yuan, Lee</Text>
          </View>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Email:</Text>
          <View style={[styles.detailBox]}>
            <Text style={styles.detailValue}>Xinyuan@gmail.com</Text>
          </View>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Password:</Text>
          <View style={[styles.detailBox]}>
            <Text style={styles.detailValue}>************</Text>
          </View>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Phone No.:</Text>
          <View style={[styles.detailBox]}>
            <Text style={styles.detailValue}>8989 9898</Text>
          </View>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Birthday:</Text>
          <View style={[styles.detailBox]}>
            <Text style={styles.detailValue}>01-01-2001</Text>
          </View>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Address:</Text>
          <View style={[styles.detailBox]}>
            <Text style={styles.detailValue}>69 Haha Street 69 #06-09</Text>
          </View>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Postal code:</Text>
          <View style={[styles.detailBox]}>
            <Text style={styles.detailValue}>654321</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={[styles.button, styles.logOutButton]} onPress={() => navigation.navigate('LogOutScreen')}>
        <Text style={styles.logOutText}>Log out</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={() => navigation.navigate('DeleteAccountScreen')}>
        <Text style={styles.deleteText}>Delete Account</Text>
      </TouchableOpacity>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
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
  user: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    borderRadius: 50,
    marginBottom: 10,
  },
  userLabel: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
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
  },
  detailBox: {
    bottom: 10,
    flex: 1,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C4C4C4',
  },
  detailValue: {
    fontSize: 16,
  },
  button: {
    marginHorizontal: 20,
    marginVertical: 10,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  logOutButton: {
    backgroundColor: '#d3d3d3',
  },
  deleteButton: {
    backgroundColor: '#FF6666',
  },
  logOutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  deleteText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
