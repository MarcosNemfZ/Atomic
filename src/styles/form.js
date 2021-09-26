import { StyleSheet }  from "react-native";
import colors from "./colors";

const formStyle = StyleSheet.create({
    txtPrimary: {
        color: colors.bgLight,
        fontSize: 36,
        fontWeight: "bold",
        textAlign: "center",
        flexDirection: "row",
        marginTop: -10,
    },
    txtSecondary:{
        color: colors.primary,
        fontSize: 36,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: -10, 
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
    imput: {
        marginBottom: 12,
        backgroundColor: colors.fontLight,
    },
    btnEnviar:{
        margin: 50,
        padding: 5,
        backgroundColor: colors.primary,
        borderRadius: 25,
    },
})

export default formStyle;