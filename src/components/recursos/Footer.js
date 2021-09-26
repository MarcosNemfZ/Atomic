import React from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Linking } from 'react-native'
import colors from '../../styles/colors';
import twitter from "../../../assets/twitter.png";
import linkedin from "../../../assets/linkedin.png";

export default function Footer() {

    const handletwitter = async () => {
        await Linking.openURL("https://twitter.com/AtomicMexico")
    }
    const handleLinkedin = async () => {
        await Linking.openURL("https://www.linkedin.com")
    }

    return (
        <View style={styles.containerbg} >
            <Text style={styles.txtAtomic} >© 200 AtomicLabs. Todos los derechos reservados.</Text>
            <Text style={[styles.txtAtomic, {textDecorationLine: "underline" }, {marginTop: 20 } ]} >Aviso de privacidad</Text>
            <View style={styles.containerSM} >
            <TouchableWithoutFeedback onPress ={handleLinkedin }>
                <Image style={styles.img} source={linkedin} />
                </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress ={handletwitter}>
                <Image style={styles.img} source={twitter} />
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerbg:{
        paddingTop: 30,
        width: "100%",
        height: 180,
        backgroundColor: colors.fontbtn,
    },
    txtAtomic:{
        textAlign: "center",
        color: colors.fontLight,
    },
    containerSM:{
        marginTop: 30,
        marginRight: 100,
        marginLeft: 100,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    img:{
        width: 25,
        height: 25,
        resizeMode: "contain",
    },
})
