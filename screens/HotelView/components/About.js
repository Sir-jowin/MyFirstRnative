import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {gs, colors} from '../../../style'

const hotel = {
    name: 'Mount Carmel Hotel',
    price: '$798',
    location: 'Oloje Ilorin',
    about: 'One of the moost acient college with contain a hotel in the city... of Ilorin. Also around the town is the most beautiful best hotel that give access to rest of mind in all to enjoy'
};
export default function About() {
    return (
        <View style={styles.contianer}>
            <Text style={gs.title}>{hotel.name}</Text>
            <Text style={styles.info}>
                {hotel.price} &#8226; {hotel.location}
            </Text>
            <View style={gs.divider} />
            <Text style={gs.sectionTitle}>About {hotel.name}</Text>
            <Text style={styles.about}>{hotel.about}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainer,
        backgroundColor: colors.darkBg
    },
    info: {
        color: colors.textSec,
        fontWeight: "600",
        marginTop: 4
    },
    about: {
       fontSize: 13,
       fontWeight: "600",
       color: colors.textSec,
       marginTop: 6,
       lineHeight: 20 
    }
});
