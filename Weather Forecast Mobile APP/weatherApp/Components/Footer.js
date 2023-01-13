import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'
import locationImg from './Images/location.png'
import vpnImg from './Images/vpn.png'
import settingsImg from './Images/settings.png'

export default function Footer() {


    return (
        <View style={styles.container}>

            <Image source={locationImg} style={{ width: 40, height: 40 }} />
            <Image source={vpnImg} style={{ width: 40, height: 40 }} />
            <Image source={settingsImg} style={{ width: 40, height: 40 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 500

    }
})