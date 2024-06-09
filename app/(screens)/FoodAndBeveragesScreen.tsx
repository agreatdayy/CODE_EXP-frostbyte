import { Image, StyleSheet, Platform, TouchableOpacity, Text, Alert, View } from 'react-native';
import React from 'react';

// import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function FoodAndBeveragesScreen({ navigation }) {
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

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        alignSelf: 'center',
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
    buttonTextFirstLine: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonTextSecondLine: {
        fontSize: 18,
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center', // Align items vertically within the container
    },
    image: {
        width: 30, // Adjust width as needed
        height: 25, // Adjust height as needed
        marginLeft: 5, // Add some spacing between the text and the image
    },
})