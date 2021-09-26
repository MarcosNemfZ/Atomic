import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Image, View, Text, ScrollView } from 'react-native';
import dlImage from "../../../assets/universe.png";
import StatusBar from "../../components/recursos/StatusBar"
import colors from '../../styles/colors';
import Head from '../../components/recursos/Head';
import Footer from '../../components/recursos/Footer';
import Registro from "../Formulario/Registro";
import Telefono from './Telefono';

export default function Formulario() {
const [form, setForm] = useState(true);
const changeForm = () => setForm(!form);

    return (
    <>
        <StatusBar backgroundColor={colors.dark} barStyle= "Light-content" />
        <ScrollView >
          <ImageBackground style={styles.imgBackgr} source={dlImage} resizeMode="cover" >

          <Head  />
              {!form ? (
                  <Telefono changeForm={changeForm} />
              ) : (
                  <Registro changeForm={changeForm} />
              ) }
          </ImageBackground>
            <Footer />
          </ScrollView>   
          
        </>
    )
}

const styles = StyleSheet.create({
    imgBackgr:{
      width: "100%",
      height: 1100,
    },
    background:{
        height: "140%",
        width: "100%",
    }
})
