import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {gs, colors} from '../../../style'


export default function Extras() {
    const extras = [
       'Payment at Checkout',
       'WI-FI Network is availiable 24/7',
       'No swimming after 12:00am due to security reason',
       'No more than 2 bags are allow',
       'Singing and Prayer walk is allow',
       'No refunds' 
    ];

    return (
        <View style={StyleSheet.extra}>
            <Text style={gs.sectionTitle}>Before you go</Text>
        
            <View style={styles.list}>
              {extras.map((extra, key) => {
                return <Text style={styles.listItem} key={key}>&ndah; {extra}</Text>  
              })}   
            </View>
            <View style={{marginBottom: 15, marginTop: 20}}>
               <TouchableOpacity style={styles.filterButton}>
                   <Text style={{fontWeight: "700", color:'#fff'}}>Filter</Text>
               </TouchableOpacity> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    extra:{
        ...gs.sectionContainer,
        marginTop: 8,
        marginBottom: 64
    },
    list: {
        marginTop: 16,
        marginLeft: 8
    },
    listItem:{
        color: colors.textSec,
        marginVertical: 8
    },
    filterButton: {
        ...gs.button,
        paddingVertical: 16
    }
})