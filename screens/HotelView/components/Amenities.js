import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors, gs } from '../../../style'
import {Feather, FontAwesome, Ionicons, Entypo} from '@expo/vector-icons';

export default function Amenities() {
    return (
        <View style={gs.sectionContainer}>
            <Text style={gs.sectionTitle}>Amenities</Text>
            
            <View style={styles.amenitiesContainer}>
                <View style={styles.amenityContainer}>
                    <View style={styles.amenty}>
                        <Feather name='wifi' size={24} color={colors.lightHl} /> 
                    </View>
                    <Text style={styles.amenityName}>WI-FI</Text>
                </View>
                <View style={styles.amenityContainer}>
                    <View style={styles.amenty}>
                        <Ionicons name='md-restaurant' size={24} color={colors.lightHl} /> 
                    </View>
                    <Text style={styles.amenityName}>Hotel Restaurant</Text>
                </View>
                <View style={styles.amenityContainer}>
                    <View style={styles.amenty}>
                        <FontAwesome name='swimmer' size={28} color={colors.lightHl} /> 
                    </View>
                    <Text style={styles.amenityName}>Swimming Pool</Text>
                </View>
                <View style={styles.amenityContainer}>
                    <View style={styles.amenty}>
                        <Entypo name='drink' size={24} color={colors.lightHl} /> 
                    </View>
                    <Text style={styles.amenityName}>Bar</Text>
                </View>
                <View style={styles.amenityContainer}>
                    <View style={styles.amenty}>
                        <Ionicons name='ios-car' size={24} color={colors.lightHl} /> 
                    </View>
                    <Text style={styles.amenityName}>Car Park</Text>
                </View>
                <View style={styles.amenityContainer}>
                    <View style={styles.amenty}>
                        <Feather name='speaker' size={24} color={colors.lightHl} /> 
                    </View>
                    <Text style={styles.amenityName}>Night Club</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    amenitiesContainer:{
        marginTop: 16,
        marginHorizontal: 16,
        ...gs.rowBetween,
        flexWrap: 'wrap'
    },
    amenityContainer: {
        alignItems: 'center',
        width: 95,
        marginVertical: 12
    },
    amenity:{
        width: 48,
        height: 48,
        borderRadius: 48/2,
        ...gs.center,
        backgroundColor:'#444',
    },
    amenityName:{
        color: colors.lightHl,
        fontSize:12,
        fontWeight: "600",
        marginTop: 6,
        textAlign: 'center'
    }
})
