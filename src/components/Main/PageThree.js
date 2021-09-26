import React from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import colors from '../../styles/colors';
import { formStyle } from "../../styles";
import imgEquipo from "../../../assets/group_4040.png"
import Equipo from "./Equipo";
import TextTeam from './TextTeam';

export default function PageThree(props) {
    const {changeMain} = props;

    return (
        <View style={styles.container} > 
          <Text style={formStyle.txtPrimary} >¡TE ENCANTARÁ</Text>
          <Text style={formStyle.txtSecondary} >TRABAJAR CON</Text>
          <Text style={formStyle.txtSecondary} >NOSOTROS</Text>
            <Image style={styles.imgTeam} source={imgEquipo} />
              <View  style={styles.containerDescription} >
                  <TextTeam />
              </View>
                <TouchableWithoutFeedback onPress ={changeMain} >
                <View style={formStyle.btnSerParte} >
                    <Text style={formStyle.btntext} >¡Quiero ser parte!</Text>
                </View>
                </TouchableWithoutFeedback> 
         <View style={styles.containerTxt} >
             <Text style={formStyle.txtPrimary} >NUESTRO</Text>
             <Text style={formStyle.txtSecondary} > EQUIPO</Text>
         </View>  
                    <Equipo />      
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
         width: "100%",
         marginTop: 50,
         padding: 10,
     },
    imgTeam:{
        marginTop: 20,
        alignItems: "center",
        width: "100%",
        height: 150,
        resizeMode: "contain",
    },
    containerDescription:{
        width: "100%",
        height: 100,
    },
    containerTxt:{
        marginTop: 100,
        marginBottom: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
})
