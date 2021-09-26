import React, {useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { TextInput, Button } from "react-native-paper";
import colors from '../../../styles/colors';
import { formStyle } from "../../../styles";
import img from "../../../../assets/group_4033.png";
import {useFormik} from "formik";
import toast from "react-native-root-toast";
import Toast from "react-native-root-toast";
import { registerApi } from "../../../api/formulario";
import * as Yup from "yup";

export default function Formulario(props) {
    const { changeForm } = props;
    const [loading, setLoadin] = useState(false)

    const formik = useFormik({
        initialValues: initialvalues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async(formData) => {
            setLoadin(true);
            try {
                toast.show("Te has registrado de manera exitosa", {
                    position: toast.positions.CENTER,
                    duration: Toast.durations.LONG,
                    shadow: true,
                    animation: true,
                    hideOnPress: true,
                    delay: 1,
                });
                await registerApi(formData);
                changeForm();
            } catch (error) {
                setLoadin(false);
                toast.show("Error en el registro, intenta de nuevo", {
                    position: toast.positions.CENTER,
                    duration: Toast.durations.LONG,
                    shadow: true,
                    animation: true,
                    hideOnPress: true,
                    delay: 0,
                });
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
            onChangeText={(text)=> formik.setFieldValue("nombre", text)}
            value={formik.values.nombre}
            error={formik.errors.nombre}
            keyboardType="default" />


           <TextInput
            label="Apellidos" 
            style={styles.textimput}
            onChangeText={(text)=> formik.setFieldValue("apellidos", text)}
            value={formik.values.apellidos}
            error={formik.errors.apellidos}/>


           <Button 
              mode="contained"
              style={formStyle.btnEnviar}
              loading={loading}
              onPress={formik.handleSubmit}
            >
                Enviar
            </Button>

            <Image style={styles.image} source={img} />

        </View>
    )
}

function initialvalues(){
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

