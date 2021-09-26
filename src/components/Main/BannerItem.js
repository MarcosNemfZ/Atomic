import React, { useRef } from 'react'
import { View, StyleSheet, Text, Image, Dimensions, } from 'react-native';
import colors from '../../styles/colors';

const width = Dimensions.get("window").width;

export default function BannerItem(props) {
    const {item } = props;

    return (
        <View >
        <View style={styles.container} >
            <Image  source={item.image} style={styles.image}  />
            <View style={styles.containerText} >
                    <View style={styles.containerLine} >
                        <View style={styles.line1} />
                        <View style={styles.line2} />
                        <View style={styles.line1} />
                    </View>
                <Text style={styles.txtTitle} >{item.title}</Text>

            <Image  source={item.imagedes} style={styles.imageDescription}  />

            </View>
        </View>
        </View>
    )
}

const  styles = StyleSheet.create({
    container:{
        paddingTop: 35,
        width: 300,
        height: 400,
        borderRadius: 20,
        marginLeft: 40,
        marginRight: 40,
        backgroundColor: colors.primary,
        flex: 1,
        alignItems: "center",
    },
    image:{
        flex: 0.4,
        width: width,
        height: 150,
        justifyContent: "center",
        resizeMode: "contain",
    },
    imageDescription:{
      //  flex: 0.4,
        width: width,
        height: 150,
        justifyContent: "center",
        resizeMode: "contain",
    },
    containerText:{
        flex:0.6,
        alignItems: "center"
    },
    txtTitle:{
        fontSize:25,
        fontWeight: "bold",
        color: colors.fontLight,
        textAlign: "center",
        marginBottom: 20,
    },
    txtDescription:{
        fontSize:18,
        fontWeight: "bold",
        color: colors.fontLight,
        textAlign: "center",
        marginBottom: 20,
    },
    containerLine:{
        width: "100%",
        height: 20,
        flexDirection: "row",
        alignItems: "flex-start"
    },
    line1:{
        width: 50,
        height: 2,
        backgroundColor: colors.fontLight,
    },
    line2:{
        width: 5,
        height: 2,
        marginRight: 5,
        marginLeft: 5,
        backgroundColor: colors.fontLight,
    },
})
 