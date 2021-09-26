import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import colors from '../../../styles/colors'
import img from "../../../../assets/group_4039.png"


export default function Body() {
    return (
        <View style={styles.container}>
        <Text style={styles.texto} >En brebe recibirás un correo de
        confirmación por parte del equipo de AtomicLabs.</Text>

        <Text style={styles.texto} >Recuerda revisar tu bandeja de SPAM
        ¡Esperamos verte pronto!</Text>


        <Image style={styles.image} source={img} />

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 40,
        margin: 20
    },
    texto: {
        color: colors.fontLight,
        fontSize: 18,
        marginBottom: 20,
    },
    image:{
        marginTop: -50,
        alignItems: "center",
        width: "100%",
        height: 500,
        resizeMode: "contain",
        padding: 10,
    }
})
