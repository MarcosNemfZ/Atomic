import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import colors from "../../styles/colors";
import Banners from './Banners';

export default function Head() {
    return (
        <View style={styles.container} > 
            <Text style={styles.txtPrimary} >SOMOS EL BRAZO</Text>
               <View style={styles.containerTxt} >
                 <Text style={styles.txtPrimary} >DERECHO</Text>
                <Text style={styles.txtSecondary} > DE LA</Text>
            </View>
            <Text style={styles.txtSecondary} >TECNOLOGIA</Text>
            <Banners />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       // height: "100%",
        width: "100%",
        marginTop: 25,
        padding: 10,
    },
    containerTxt:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    txtPrimary: {
        color: colors.bgLight,
        fontSize: 36,
        fontWeight: "bold",
        textAlign: "center",
        flexDirection: "row",
        marginTop: -10,
    },
    txtSecondary:{
        color: colors.primary,
        fontSize: 36,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: -10, 
    },
})
