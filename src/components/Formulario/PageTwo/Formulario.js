import React, {useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { TextInput, Button } from "react-native-paper";
import colors from '../../../styles/colors';
import { formStyle } from "../../../styles";
import img from "../../../../assets/group_4034.png"
import {useFormik} from "formik"
import * as Yup from "yup"
import HeadLine from "./HeadLine"

export default function Formulario(props) {
    const { changeFinal } = props;
    const [loading, setLoadin] = useState(false)

    const formick = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
    });

    return (
        <View style={styles.container} >
            <HeadLine />
            <Text style={styles.texto} >Necesitamos validar tu número para continuar</Text>
            <Text style={styles.texto} >Ingresa tu número a 10 digitos y te enviaremos un
            código SMS</Text>

            <TextInput
            label="Número de celular" 
            style={styles.textimput}
            onChangeText={(text)=> formick.setFieldValue("numero", text)}
            value={formick.values.numero}
            error={formick.errors.numero}
            keyboardType="number-pad" />

           <Button 
              mode="contained"
              style={formStyle.btnEnviar}
              onPress={changeFinal}
              loading={loading}
            >
                Continuar
            </Button>

            <Image style={styles.image} source={img} />

        </View>
    )
}

function initialValues(){
    return {
        numero: "",
    };
}

function validationSchema(){
    return {
        numero: Yup.string().required(true).min(10, true).max(10, true),
    };

}

const styles = StyleSheet.create({
    container:{
        marginTop: -20,
        margin: 20
    },
    texto: {
        color: colors.fontLight,
        fontSize: 16,
        marginBottom: 20,
    },
    textimput: {
        color: colors.primary,
        marginTop: 20,
        height:50,
        marginBottom: 12,
        backgroundColor: "#fff",
    },
    image:{
        marginTop: -50,
        alignItems: "center",
        width: "100%",
        height: 500,
        resizeMode: "cover",
        padding: 10,
    }

})