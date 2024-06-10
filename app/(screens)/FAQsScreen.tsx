import { Image, StyleSheet, Platform, TouchableOpacity, Text, View } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import ParallaxScrollView from '@/components/ParallaxScrollView';

const Collapsible = ({ title, children, isCollapsed, onToggle }) => {
    return (
      <View style={styles.collapsibleContainer}>
        <TouchableOpacity onPress={onToggle} style={styles.collapsibleHeader}>
          <Text style={styles.collapsibleTitle}>{title}</Text>
          <Icon name={isCollapsed ? 'plus' : 'minus'} size={20} color="#28B492" />
        </TouchableOpacity>
        {!isCollapsed && <View style={styles.collapsibleContent}>{children}</View>}
      </View>
    );
  };

export default function FAQsScreen({ navigation }) {
    const [isAllExpanded, setIsAllExpanded] = useState(false);
    const [collapsedStates, setCollapsedStates] = useState([true, true, true, true]);

    const toggleAll = () => {
      const newState = !isAllExpanded;
      setIsAllExpanded(newState);
      setCollapsedStates(collapsedStates.map(() => !newState));
    };

    const toggleItem = index => {
    setCollapsedStates(collapsedStates.map((collapsed, i) => (i === index ? !collapsed : collapsed)));
    };
    
    return (
      <ParallaxScrollView headerBackgroundColor={{ light: 'white', dark: 'white' }}>

        <View style={styles.container}>
          <View style={styles.topbox}>
            <View style={styles.topBoxContainer}>
              <Text style={styles.FAQTitle}>FAQs</Text>
            </View>
            <TouchableOpacity onPress={toggleAll} style={styles.topBoxContainer}>
              <Text style={styles.ViewAllText}>{isAllExpanded ? 'Collapse all' : 'View all'}</Text>
            </TouchableOpacity>
          </View>
    
          <Collapsible
            title="How do I use my DinoMiles to redeem vouchers?"
            isCollapsed={collapsedStates[0]}
            onToggle={() => toggleItem(0)}
          >
            <Text style={styles.FAQAnswerText}>
              Open the rewards tab at the bottom of the application and click the “Redeem” button at the bottom right of the voucher you want to redeem
            </Text>
          </Collapsible>
    
          <Collapsible
            title="Which QR codes are supported by this app?"
            isCollapsed={collapsedStates[1]}
            onToggle={() => toggleItem(1)}
          >
            <Text style={styles.FAQAnswerText}>
              Any eco-QR codes are supported by the app. Just head to the Scan tab and scan the QR code to gain DinoMiles.
            </Text>
          </Collapsible>
    
          <Collapsible
            title="How do I link my transportion card to DinoMiles?"
            isCollapsed={collapsedStates[2]}
            onToggle={() => toggleItem(2)}
          >
            <Text style={styles.FAQAnswerText}>Just simply enter your ezlink card number.</Text>
          </Collapsible>
    
          <Collapsible
            title="Are DinoMiles transferrable?"
            isCollapsed={collapsedStates[3]}
            onToggle={() => toggleItem(3)}
          >
            <Text style={styles.FAQAnswerText}>No, unfortunately, DinoMiles are not transferrable.</Text>
          </Collapsible>
        </View>
      </ParallaxScrollView>
    );
  }
    

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
  },
  topbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'white',
  },
  topBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  FAQTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  ViewAllText: {
    fontSize: 16,
    color: '#28B492',
    fontWeight: 'bold',
  },
  FAQAnswerText: {
    fontSize: 16,
    color: '#2F2E2E',
    padding: 10,
  },
  QuestionContainer: {
    marginTop: 20,
    borderRadius: 10,
  },
  collapsibleContainer: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#28B492',
    borderRadius: 5,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  collapsibleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#28B492',
  },
  collapsibleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  collapsibleContent: {
    padding: 15,
  },
});
