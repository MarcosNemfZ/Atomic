import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { IconButton } from "react-native-paper";
import colors from '../../styles/colors';

export default function TextTeam() {
    return (
        <View style={styles.container} > 
            <Text style={styles.texto}>Contratación remota</Text>
            <IconButton  icon="arrow-right" color={colors.primary} size={19} flex={0.1} />
            <Text style={styles.texto}>Entrevista con el área de RH</Text>
            <IconButton  icon="arrow-right" color={colors.primary} size={19} flex={0.1} />
            <Text style={styles.texto}>Prueba práctica</Text>
            <IconButton  icon="arrow-right" color={colors.primary} size={19} flex={0.1} />
            <Text style={styles.texto}>Entrevista técnica</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    texto:{
        flex: 0.23,
        color: colors.fontLight,
        textAlign: "center",
        flexDirection: "column",
        fontSize: 10,
    },
})
