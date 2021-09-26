import React from 'react'
import { ImageBackground, StyleSheet, Image, View, Text, ScrollView } from 'react-native'
import bgImage from "../../../assets/bg_atomicUno.png";
import dlImage from "../../../assets/universe.png";
import StatusBar from "../../components/recursos/StatusBar"
import colors from '../../styles/colors';
import Head from '../../components/recursos/Head';
import PageOne from "../../components/Main/PageOne";
import PageTow from "../../components/Main/PageTwo";
import PageThree from "../../components/Main/PageThree";
import Footer from '../../components/recursos/Footer';;

export default function Main(props) {
const {changeMain} = props;

    return (
        <>
        <StatusBar backgroundColor={colors.dark} barStyle= "Light-content" />
        <ScrollView >
          <ImageBackground style={styles.imgBackgr} source={dlImage} resizeMode="cover" >
               <Head  />
               <PageOne changeMain={changeMain}/>
               <PageTow />
               <PageThree changeMain={changeMain} />
          </ImageBackground>
            <Footer />
          </ScrollView>   
          
        </>
    )
}

const styles = StyleSheet.create({
    imgBackgr:{
      width: "100%",
      height: 3100,
           // flex: 1,
          //  justifyContent: "".
    },
    background:{
        height: "140%",
        width: "100%",
      //  backgroundColor: 'transparent'
    }
})
