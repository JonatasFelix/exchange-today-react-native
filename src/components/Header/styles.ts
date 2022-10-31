import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 26,
        marginBottom: 20,
    },

    text: {
        fontSize: 20,
        color: "#FFF",
        position: "absolute",
        left: 0,
        right: 0,
        textAlign: "center",
        textTransform: "uppercase",
        fontWeight: "bold",
        letterSpacing: 2,
    },

    button: {
        width: 40,
        height: 40,
        backgroundColor: "#D9D9D9",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
});