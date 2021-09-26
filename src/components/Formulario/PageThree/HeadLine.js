import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { formStyle } from "../../../styles";

export default function HeadLine() {
    return (
        <View> 
        <Text style={formStyle.txtPrimary} >TUS DATOS</Text>
            <View style={styles.containerTxt} >
              <Text style={formStyle.txtPrimary} >HAN SIDO</Text>
              <Text style={formStyle.txtSecondary} > ENVIADOS</Text>
            </View>
              <Text style={formStyle.txtSecondary} >CON ÉXITO</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerTxt:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
})
