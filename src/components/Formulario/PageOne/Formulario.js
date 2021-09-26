import React, {useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { TextInput, Button } from "react-native-paper";
import colors from '../../../styles/colors';
import { formStyle } from "../../../styles";
import img from "../../../../assets/group_4033.png"
import {useFormik} from "formik"
import { registerApi } from "../../../api/formulario"
import * as Yup from "yup"

export default function Formulario(props) {
    const { changeForm } = props;
    const [loading, setLoading] = useState(false);

    const formick = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async(formData) => {
            setLoading(true);
            try {
                await registerApi(formData);
                changeForm();
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        },
    });

    return (
        <View style={styles.container} >
            <Text style={styles.texto} >Queremos saber que eres tú, por
             favor ingresa los siguientes datos</Text>

            <TextInput
            label="Nombre(s)" 
            style={styles.textimput}
            onChangeText={(text)=> formick.setFieldValue("nombre", text)}
            value={formick.values.nombre}
            error={formick.errors.nombre}
            keyboardType="default" />


           <TextInput
            label="Apellidos" 
            style={styles.textimput}
            onChangeText={(text)=> formick.setFieldValue("apellidos", text)}
            value={formick.values.apellidos}
            error={formick.errors.apellidos}/>


           <Button 
              mode="contained"
              style={formStyle.btnEnviar}
              loading={loading}
              onPress={formick.handleSubmit}
            >
                Enviar
            </Button>

            <Image style={styles.image} source={img} />

        </View>
    )
}

function initialValues(){
    return {
        nombre: "",
        apellidos: ""
    };
}

function validationSchema(){
    return {
        nombre: Yup.string().required(true).min(5, true),
        apellidos: Yup.string().required(true),
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
        height: 450,
        resizeMode: "cover",
        padding: 10,
    }

})

