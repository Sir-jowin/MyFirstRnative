import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import {colors} from '../../style'
import About from './components/About'
import Address from './components/Address'
import Amenities from './components/Amenities'
import Bookmark from './components/Bookmark'
import Extras from './components/Extras'
import Header from './components/Header'
import Stats from './components/Stats'

export default function index() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
        
               <Header />

            <View>
              <Bookmark /> 
              <About />
              <Stats />
              <Amenities />
              <Address />
              <Extras />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.darkBg,
    },
  });

