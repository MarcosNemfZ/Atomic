import React from 'react'
import { View, StyleSheet, Text, Image, TouchableWithoutFeedback } from 'react-native'
import colors from "../../styles/colors";
import imgTexto from "../../../assets/txt_main.png";
import imgArrow from "../../../assets/arrowb.png";
import imgAstronauta from "../../../assets/group_4032.png"
import PageTwo from "./PageTwo"

export default function Head(props) {
    const {changeMain} = props;


    return (
        <View style={styles.container} > 
            <View style={styles.imgTxtContainer} >
                <Image style={styles.imgtxt} source={imgTexto} />
            </View>
            <View style={styles.arrowContainer} >
                <TouchableWithoutFeedback onPress ={() => console.log("Arrow") }>
                <Image style={styles.imgArrow} source={imgArrow} />
                </TouchableWithoutFeedback>
                <Text style={styles.txt} >Quiero saber más</Text>
            </View>
                <Image  style={styles.imgAstro} source={imgAstronauta} />
                
                <TouchableWithoutFeedback onPress ={changeMain} >
                <View style={styles.btnSerParte} >
                    <Text style={styles.btntext} >¡Quiero ser parte!</Text>
                </View>
                </TouchableWithoutFeedback> 
                
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      //  height: "100%",
        width: "100%",
        padding: 10,
        marginTop: -60,
      //  paddingVertical: 20,
      //  paddingHorizontal: 20,
      //  zIndex: 1,
      //  elevation: 2,
    },   
    imgTxtContainer:{
        width: "100%",
        height: 180,
        marginTop: -20,
        marginBottom: 20,
    },
    imgtxt:{
        width: "100%",
        height: 200,
        resizeMode: "contain",
        padding: 10,
    },
    arrowContainer:{
        alignItems: "center",
        width: "100%",
        height: 100,
    },
    imgArrow:{
        width: 50,
        height: 50,
        resizeMode: "contain",
    },
    txt:{
        color: colors.bgLight,
        fontSize: 15,
    },
    imgAstro:{
        marginTop: -10,
        alignItems: "center",
        width: "100%",
        height: 300,
        resizeMode: "contain",
        padding: 10,
    },
    btnSerParte:{
        borderWidth: 1.9,
        borderRadius: 20,
        borderColor: colors.bgLight,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginRight: 70,
        marginLeft: 70,
        marginTop: 30,
        alignItems: "center",
        backgroundColor: colors.bgLight,
    },
    btntext:{
        color: colors.light,
        fontSize: 17,
        margin: 10,
    },
})