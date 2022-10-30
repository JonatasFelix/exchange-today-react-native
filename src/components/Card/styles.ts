import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#272727',
        borderRadius: 10,

       justifyContent: 'space-between',
       alignItems: 'center',
    },

    PrimaryBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    currencySimbol: {
        fontSize: 20,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: 56,
        height: 56,
        backgroundColor: '#ffffff',
        marginRight: 15,
    },

    actualValue: {
        color: '#ffffff',
        alignContent: 'center',
    },

});