import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { formStyle } from "../../../styles";
import colors from '../../../styles/colors';

export default function HeadLine() {
    return (
        <View style={styles.container} >
            <View style={styles.containC} >
            <View style={styles.circulo} >
            <Text style={styles.numero} >2</Text>
            </View>
            </View>
               <View style={styles.containerTxt} >
               <Text style={formStyle.txtPrimary} >VALIDA TU</Text>
               <Text style={formStyle.txtSecondary} >CELULAR</Text>
         </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 40,
        flexDirection: "row",
        height: 100, 
    },
    containC:{
        flex: 0.25,
       alignContent: "center",
       alignItems: "center",
    },
    circulo:{
        width: "60%",
        height: "50%",
        backgroundColor: colors.primary,
        borderRadius: 50,
        alignItems: "center",
    },
    numero:{
        fontSize: 20,
        marginTop: 10,
        fontWeight: "bold",
        color: colors.fontLight,
    },containerTxt:{
        flex: 0.75,
        marginLeft: 10,
        marginTop: -5,
        alignItems: "flex-start",
    },
})