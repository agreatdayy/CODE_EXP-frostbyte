import { Image, StyleSheet, TouchableOpacity, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useNavigation } from '@react-navigation/native';

export default function EditProfileScreen() {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('Xin Yuan');
  const [lastName, setLastName] = useState('Lee');
  const [username, setUsername] = useState('ValenElectrons');
  const [email, setEmail] = useState('Xinyuan@gmail.com');
  const [password, setPassword] = useState('************');
  const [phoneNumber, setPhoneNumber] = useState('+65 8989 9898');
  const [dateOfBirth, setDateOfBirth] = useState('01-01-2001');
  const [address, setAddress] = useState('69 Haha Street 69 #06-09');
  const [postalCode, setPostalCode] = useState('654321');
  return ( 
    <ParallaxScrollView
        headerBackgroundColor={{ light: 'white', dark: 'white' }}>
        
    
      <View style={styles.topButtonBox}>
        <TouchableOpacity style={styles.topbutton} onPress={() => navigation.navigate('profile')}>
            <Text style={styles.MyText}>Save Changes</Text>
        </TouchableOpacity>
      </View>

      <Image source={require('@/assets/images/user.jpg')} style={styles.user} />

        <View style={styles.profileDetails}>
          <View style={styles.detailContainer}>
            <Text style={styles.detailLabel}>First name:</Text>
            <TextInput
              style={[styles.detailBox]}
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.detailLabel}>Last name:</Text>
            <TextInput
              style={[styles.detailBox]}
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.detailLabel}>Username:</Text>
            <TextInput
              style={[styles.detailBox]}
              value={username}
              onChangeText={setUsername}
            />
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.detailLabel}>Email:</Text>
            <TextInput
              style={[styles.detailBox]}
              value={email}
              onChangeText={setEmail}
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
          <View style={styles.detailContainer}>
            <Text style={styles.detailLabel}>Phone No.:</Text>
            <TextInput
              style={[styles.detailBox]}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.detailLabel}>Date of Birth:</Text>
            <TextInput
              style={[styles.detailBox]}
              value={dateOfBirth}
              onChangeText={setDateOfBirth}
            />
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.detailLabel}>Address:</Text>
            <TextInput
              style={[styles.detailBox]}
              value={address}
              onChangeText={setAddress}
            />
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.detailLabel}>Postal Code:</Text>
            <TextInput
              style={[styles.detailBox]}
              value={postalCode}
              onChangeText={setPostalCode}
            />
          </View>
        </View>
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
  });
