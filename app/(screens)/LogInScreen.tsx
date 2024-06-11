import { Image, StyleSheet, TouchableOpacity, Text, View, TextInput, Button, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useNavigation } from '@react-navigation/native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { initializeApp } from '@firebase/app';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, User}  from '@firebase/auth';
// import App from '../(tabs)';

const firebaseConfig = {
  apiKey: "AIzaSyCrAnLnAfPxdh92sns466RKB3PHp4c2mEQ",
  authDomain: "dinomiles-c7524.firebaseapp.com",
  projectId: "dinomiles-c7524",
  storageBucket: "dinomiles-c7524.appspot.com",
  messagingSenderId: "670077007098",
  appId: "1:670077007098:web:64a63b8085dc68fffe8543",
  measurementId: "G-FQ1GGXJTXC"
};
const app = initializeApp(firebaseConfig);

interface AuthScreenProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
  handleAuthentication: () => void;
}

const AuthScreen: React.FC<AuthScreenProps> = ({ email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication }) => {
  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title={isLogin ? 'Sign In' : 'Sign Up'} onPress={handleAuthentication} color="#3498db" />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
        </Text>
      </View>
    </View>
  );
};

interface AuthenticatedScreenProps {
  user: User; // Assuming User is the type of your user object
  handleAuthentication: () => void;
}


const AuthenticatedScreen: React.FC<AuthenticatedScreenProps> = ({ user, handleAuthentication }) => {
  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.emailText}>{user.email}</Text>
      <Button title="Logout" onPress={handleAuthentication} color="#e74c3c" />
    </View>
  );
};

// const App = () => 
export default function LogInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [isLogin, setIsLogin] = useState(true);

  
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe();
  }, []);

  const handleAuthentication = async () => {
    try {
      if (user) {
        // Log out
        await auth().signOut();
        console.log('User logged out successfully!');
      } else {
        // Sign in or sign up
        if (isLogin) {
          // Sign in
          await auth().signInWithEmailAndPassword(email, password);
          console.log('User signed in successfully!');
        } else {
          // Sign up
          await auth().createUserWithEmailAndPassword(email, password);
          console.log('User created successfully!');
        }
      }
    } catch (error) {
      const err = error as Error;
      console.error('Authentication error:', err.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {user ? (
        <AuthenticatedScreen user={user} handleAuthentication={handleAuthentication} />
      ) : (
        <AuthScreen
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          handleAuthentication={handleAuthentication}
        />
      )}
    </ScrollView>
  );
};

// export default function LogInScreen() {
//   const navigation = useNavigation();
  
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
  
//   return ( 
//     <ParallaxScrollView headerBackgroundColor={{ light: 'white', dark: 'white' }}>
    
//       <View style={styles.container}>
//         <Image 
//           source={require('@/assets/images/DinoMiles.jpg')} 
//           style={styles.homeDino} 
//         />
//       </View>
        
//       <ThemedView style={styles.titleContainer}>
//           <ThemedText type="title" style={styles.dinoMilesText}>DinoMiles</ThemedText>
//       </ThemedView>

//       <View style={styles.profileDetails}>
//         <View style={styles.detailContainer}>
//           <Text style={styles.detailLabel}>Username:</Text>
//           <TextInput
//             style={[styles.detailBox]}
//             value={username}
//             onChangeText={setUsername}
//           />
//         </View>
//         <View style={styles.detailContainer}>
//           <Text style={styles.detailLabel}>Password:</Text>
//           <TextInput
//             style={[styles.detailBox]}
//             value={password}
//             onChangeText={setPassword}
//           />
//         </View>
//       </View>

//       <TouchableOpacity style={[styles.button, styles.logOutButton]} onPress={() => navigation.navigate('Home')}>
//           <Text style={styles.logOutText}>Log In</Text>
//       </TouchableOpacity>
      
//       <View style={styles.container}>
//         <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
//             <Text style={styles.signText}>New? Sign up now!</Text>
//         </TouchableOpacity>
//       </View>
//     </ParallaxScrollView>
//   );
// }

const styles = StyleSheet.create({
  authContainer: {
    width: '80%',
    maxWidth: 400,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    marginBottom: 16,
  },
  toggleText: {
    color: '#3498db',
    textAlign: 'center',
  },
  bottomContainer: {
    marginTop: 20,
  },
  emailText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
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