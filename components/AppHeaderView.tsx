import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, useColorScheme, TouchableOpacity, Alert, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

const HEADER_HEIGHT = 50;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function AppHeaderView({
  children,
  headerBackgroundColor,
}: Props) {
  const handleButtonPress = () => {
    Alert.alert("Button Pressed", "You pressed the Food and Beverage button!");
  };

  const colorScheme = useColorScheme() ?? 'light';
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });

  return (
    <ThemedView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <View style={styles.buttonContent}>
          <Ionicons name="chevron-back-outline" size={24} color="black" />
        </View>
        </TouchableOpacity>
      <ThemedText type="title">Scan</ThemedText>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.View
          style={[
            styles.header,
            { backgroundColor: headerBackgroundColor[colorScheme] },
            headerAnimatedStyle,
          ]}>
        </Animated.View>
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },
  buttonContainer: {
    margin: 2, 
    alignItems: 'center', 
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderRadius: 2,
    borderColor: 'black',
    borderWidth: 1,
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
});
