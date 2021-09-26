import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import colors from "../../styles/colors";

export default function Head() {
    return (
        <View style={styles.container} > 
            <Text style={styles.txtPrimary} >Desarrolla todo</Text>
            <Text style={styles.txtSecondary} >tu POTENCIAL</Text>
            <Text style={styles.txtPrimary} >dentro del equipo</Text>
            <View >

            </View>
            <Text style={styles.txtSecondary} >ATOMICLABS</Text>
            <Text>ATOMICLABS</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 20,
        paddingHorizontal: 20,
        zIndex: 1,
        elevation: 2,
    },
    txtPrimary: {
        color: colors.bgLight,
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        flexDirection: "row",
        marginTop: -15
    },
    txtSecondary:{
        color: colors.insta,
        fontSize: 50,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: -15 
    },
})