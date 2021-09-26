import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../../styles/colors';
import equipo1 from "../../../assets/equipo_1.png";
import equipo2 from "../../../assets/equipo_2.png";
import equipo3 from "../../../assets/equipo_3.png";

export default function Equipo() {
    return (
        <View style={styles.container}  >
            <View style={styles.containerTeam}  >
                <Image style={styles.image} source={equipo1} />
            </View>
            <View style={styles.containerTeam}  >
                <Image style={styles.image} source={equipo2} />
            </View>
            <View style={styles.containerTeam}  >
                <Image style={styles.image} source={equipo3} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
    },
    containerTeam:{
        height: 250,
        borderRadius: 10,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: colors.light,
        alignContent: "center",
        alignItems: "center",
    },
    image:{
        height: 200,
        resizeMode: "contain",
        marginTop: 20,
    },
})
