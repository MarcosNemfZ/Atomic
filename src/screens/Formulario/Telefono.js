import React, { useState }  from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Formulario from '../../components/Formulario/PageTwo/Formulario';
import Completado from './Completado';

export default function Telefono() {
const [final, setFinal] = useState(true);
const changeFinal = () => setFinal(!final);

    return (
        <View>
            {!final ? (
                  <Completado changeFinal={changeFinal} />
              ) : (
                     <Formulario changeFinal={changeFinal} />
              ) }
        </View>
    )
}

const styles = StyleSheet.create({})
