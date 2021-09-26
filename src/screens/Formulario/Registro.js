import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HeadLine from "../../components/Formulario/PageOne/HeadLine";
import Formulario from '../../components/Formulario/PageOne/Formulario';

export default function Registro(props) {
    const { changeForm } = props;

    return (
        <View>
            <HeadLine />
            <Formulario changeForm={changeForm} />
        </View>
    )
}

const styles = StyleSheet.create({})
