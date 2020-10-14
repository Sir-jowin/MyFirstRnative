import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { AntDesign, Entypo} from "@expo/vector-icons";
import {gs} from '../../../style'
export default function Header() {
    return (
        <View>
          <Image source={require("../../../assets/joo.jpg")} style={styles.image}/>
        
          <View style={styles.topButtons}>
            <AntDesign name='close' size={24} color='#000' />

            <View style={gs.rowCenter}>
                <AntDesign name="save" size={24} style={styles.topButtonRight} />
                <AntDesign name="sharealt" size={24} style={styles.topButtonRight} />
                <Entypo name="dots-three-vertical" size={18} style={styles.topButtonRight} />
            </View>
          </View>
        </View>

        
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    },
    topButtons:{
       ...gs.rowBetween,
       position: 'absolute',
       top: 20,
       left: 10,
       right: 10,
    },
    topButtonRight: {
        marginLeft: 12,
            color: '#000'
    }
  });
