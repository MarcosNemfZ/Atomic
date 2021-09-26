import React from 'react'
import { View, StyleSheet, Image} from 'react-native'
import logo from "../../../assets/atomic_logo.png"

export default function Head(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.imgLogo} source={logo} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 150,
        marginBottom: 20,
    },
    imgLogo:{
        marginTop: -40,
        width: "100%",
        height: 180,
        resizeMode: "contain",
    },
})